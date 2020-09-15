from django.urls import path
from content import views 
urlpatterns = [
     path('quizz', views.quizz, name="Quizz"),
     path('quizz2', views.quizz2, name="deuxieme_quizz"),
     path('quizz3', views.quizz3, name="troisieme_quizz"),
     path('quizz4', views.quizz4, name="quatrieme_quizz")
]