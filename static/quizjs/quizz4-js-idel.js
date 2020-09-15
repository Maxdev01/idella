
const options=document.querySelector(".options").children;
const answerTrackerContainer=document.querySelector(".answers-tracker");
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const correctAnswerSpan=document.querySelector(".correct-answers");
const totalQuestionSpan2=document.querySelector(".total-question2");
const percentage=document.querySelector(".percentage");
const question=document.querySelector(".question")
const op1 = document.querySelector(".option1");
const op2 = document.querySelector(".option2");
const op3 = document.querySelector(".option3");
const op4 = document.querySelector(".option4");
let questionIndex;
let index=0;
let myArray=[];
let myArr=[];
let score=0;
let algo = document.querySelector("#btn-algo");

// questions and options and answers

const questions=[

// ############ premiere question 

{
q: "C’est un processus par lequel deux ou plusieurs parties tentent de trouver un moyen a gerer un conflit.",
options: ["compromis", "negociation", "mediation", "arbitrage"],
answer: 1
},

// ####### deuxieme question 
{
q: "Dans ce type de negociation,on assiste a des compromis, des concessions, des concensus.",
options: ["negociation cooperative", "negociation conflictuelle", "aucune de ces reponses"],
answer: 0
},

{
q: "Cette technique permet de ne pas effrayer l’adversaire mais de grignoter petit a petit ses positions.",
options: ["technique des pivots", "technique “point par point", "technique des bilans", "aucune de ces reponses"],
Answer:1
},


{
q: "C’est une technique dans laquelle on oblige l’adversaire a negocier sur des objectifs en fait secondaire mais formules de maniere exigeante.",
options: ["techniques de maniement du temps", "technique des pivots", "technique des bilans", "technique 'point par point' "],
Answer:1
},

{
q: "C’est un processus par lequel les parties en conflit font appel a un tiers pour essayer de resoudre leur probleme."
options: ["l’arbitrage", "la mediation", "la cooperation", "la negociation"],
Answer: 1
},

{
q: "Lors des conflits, il n‘est qu’un relais qui facilite la discussion, guide la conversation ou la provoque.",
options: ["le negociateur", "le diplomate", "L’arbitre", "le mediateur"],
Answer: 2
},

{
q: "Cette etape exige le savoir ecouter du mediateur. C’est l’etape dans laquelle chacune des parties aura l’occasion de presenter les faits.",
options: ["introduction", "recits", "accord", "resolution"],
Answer:1
},

{
q: "C’est une etape qui sert a creer une ambiance favorable pour etablir les regles et pour preciser les roles du mediateur.","
options: ["accord", "resolution", "introduction", "aucune de ces reponses"],
Answer:2
}


]

// set questions and options and question number 
// sa pati sa ki responsab poul fe kesyon ak tt chwa yo afiche nan paj html lan

totalQuestionSpan.innerHTML=questions.length;
function load(){
	questionNumberSpan.innerHTML=index+1;
	question.innerHTML=questions[questionIndex].q;
	op1.innerHTML=questions[questionIndex].options[0];
	op2.innerHTML=questions[questionIndex].options[1];
	op3.innerHTML=questions[questionIndex].options[2];
	op4.innerHTML=questions[questionIndex].options[3];
	index++;

}

//fonction sa se pou lhrw klike sou chwa wap fe an
 // menm fonktyon sa ap  pemet ou konnen lhr chwa a bon ou pa
// menm fonktyon sa pemet ou we l tou 


function check(element){
	if(element.id==questions[questionIndex].answer){
		element.classList.add("correct");
		updateAnswerTracker("correct")
		score++;
		console.log("score:"+score)
	}
	else{
		element.classList.add("wrong");
		updateAnswerTracker("wrong")
	} 
	disabledOptions()
}

// sa se yon fonktyon kap pemet ou chwazi youn
function disabledOptions(){
	for(let i=0; i<options.length; i++){
		options[i].classList.add("disabled");
		if(options[i].id==questions[questionIndex].answer){
			options[i].classList.add("correct");
		}
	}
}

//function sa c pou lhr cliquer pou li pa baw menm nan
function enableOptions(){
	for(let i=0; i<options.length; i++) {
		options[i].classList.remove("disabled","correct","wrong");
	}
}



//function sa ap gen yon kondisyon ladan pou diw pa chwazi youn
function validate(){
	if(!options[0].classList.contains("disabled")){
		alert("SVP vous devez choisir une option")
	}
	else{
		enableOptions();
		randomQuestion();
	} 
}

// function ap pemet ou valide
function next(){
	validate();
}


// kounya nou pral fe yon function kap pemet kesyon yo vinn aleatwa
 function randomQuestion(){
 	let randomNumber=Math.floor(Math.random()*questions.length);
 	let hitDuplicate=0;
 	if(index==questions.length){
 		console.log("quiz over")
 		quizOver();
 	}
 	else{
 		// premier
 		if(myArray.length>0){
 			for(let i=0; i<myArray.length; i++){
 				if(myArray[i]==randomNumber){
 					hitDuplicate=1;
 					break;
 				}
 			}
 			if(hitDuplicate==1){
 				randomQuestion();
 			}
 			else{
 				questionIndex=randomNumber;
 				load();
 				myArr.push(questionIndex);
 			}
 			

 		}
 		//deuxieme
 		if(myArray.length==0){
 			questionIndex=randomNumber;
 			load();
 			myArr.push(questionIndex);
 		}

 	
 	    myArray.push(randomNumber);

 	//test dans la console
 	// console.log("myArray:"+myArray)
 	//console.log(questionIndex)
 	
 	 }
 }

 // fonktyon sa pral pemet u konnen lhr li bon ou pa men nan sans konkre
//menm fonktyon sa ap pemet ou kreye yon div 
function answerTracker(){
	for(let i=0; i<questions.length; i++){
		const div=document.createElement("div")
		answerTrackerContainer.appendChild(div);
	}
}

// fonktyon sa ap pemet ou wel 
function updateAnswerTracker(classNam){
	answerTrackerContainer.children[index-1].classList.add(classNam);
}
//function ap pemet ou afiche resulta final moun lan apre quizz lan 
function quizOver(){
	document.querySelector(".quiz-over").classList.add("show");
	correctAnswerSpan.innerHTML=score;
	totalQuestionSpan2.innerHTML=questions.length;
	percentage.innerHTML=(score/questions.length)*100 + "%";

}
// function sa c pouw ka rejwe anko siw vle 
function tryAgain(){
	window.location.reload();
}

window.onload=function(){
	randomQuestion();
	answerTracker();
}


// fonktyon sa se poy si moun nan pa fe note pou li retounen anko

 algo.addEventListener('click', function() {
   correctAnswerSpan.innerHTML=score;
   totalQuestionSpan2.innerHTML=questions.length;

   if (correctAnswerSpan >= 4){
   	alert("Succes");
   }
   else {
   	algo.style.display = "none";
   	alert('Echec');
   }
 });