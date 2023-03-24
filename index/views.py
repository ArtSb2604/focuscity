from datetime import datetime, timedelta

import pytz
from django.contrib.auth import authenticate, login
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect

# Create your views here.
from django.views.generic import TemplateView

from users.models import HistoryAuth


class Index(TemplateView):
    template_name = "index/index.html"


def login_ac(request):
    if request.POST:
        user = authenticate(request, username=request.POST['mail'], password=request.POST['password'])
        if user:
            d = datetime.now() + timedelta(hours=3)
            print(d)
            login(request, user)
            history = HistoryAuth(pk_user=user.pk, user=user.username, data=d)
            history.save()
            return redirect('index')
    return render(request, 'registration/login.html')

def logout(request):
    logout(request)

class ContactsView(TemplateView):
    template_name = 'index/contacts.html'
