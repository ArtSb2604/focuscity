from datetime import datetime, timedelta

import pytz
from django.contrib.auth import authenticate, login
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect

# Create your views here.
from django.views.generic import TemplateView

import objects.views
from objects.models import Objects, Images
from users.models import HistoryAuth, CustomUser


class Index(TemplateView):
    template_name = "index/index.html"

def pdf(request):
    object = Objects.objects.get(pk=request.GET['type_obj_pdf'])
    image = Images.objects.filter(note=request.GET['type_obj_pdf'])
    return render(request, 'present-1.html', {'object':object, 'image':image, 'type': int(request.GET['pdf_type']), 'user': CustomUser.objects.get(pk=object.user)})

def login_ac(request):
    if request.POST:
        user = authenticate(request, username=request.POST['mail'], password=request.POST['password'])
        if user:
            history = HistoryAuth(pk_user=user.pk, user=user.username, data=datetime.now() + timedelta(hours=3))
            login(request, user)
            history.save()
            return redirect('index')

    return render(request, 'registration/login.html')

def logout(request):
    logout(request)

class ContactsView(TemplateView):
    template_name = 'index/contacts.html'
