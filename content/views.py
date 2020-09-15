from django.shortcuts import render

# Create your views here.

def quizz(request):
    return render(request, "quiz.html")

def quizz2(request):
    return render(request, "quizz2.html")

def quizz3(request):
    return render(request, "quizz3.html")

def quizz4(request):
    return render(request, "quizz4.html")