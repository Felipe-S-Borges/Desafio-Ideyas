from django.shortcuts import render

from django.http import HttpResponse


# Create your views here.

def index(request):
    return render(request,'cadastro/index.html')


def listaAmiga():

    return 