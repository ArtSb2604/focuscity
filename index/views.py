from django.contrib.auth import authenticate, login
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect

# Create your views here.
from django.views.generic import TemplateView


class Index(TemplateView):
    template_name = "index/index.html"


def login_ac(request):
    if request.POST:
        print(request.POST)
        user = authenticate(request, username=request.POST['mail'], password=request.POST['password'])
        print(user)
        if user:
            login(request, user)
            return redirect('index')
    return render(request, 'registration/login.html')

def logout(request):
    logout(request)
