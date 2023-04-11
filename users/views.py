import json
import uuid
from datetime import datetime, timedelta

from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.core import serializers
from django.core.paginator import Paginator
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.template import RequestContext
from django.template.loader import render_to_string
from django.views.generic import TemplateView, ListView, DetailView

from users.forms import CustomUserCreationForm
from users.models import CustomUser, HistoryAuth, Callback


class Admin(TemplateView):
    template_name = "admin_panel/base_admin.html"

class CallbackView(ListView):
    model = Callback
    template_name = "admin_panel/callback.html"
    context_object_name = "objects"
    paginate_by = 11

    def get_context_data(self, **kwargs):
        context = super(CallbackView, self).get_context_data(**kwargs)
        context.update({'call': len(Callback.objects.all()),})
        return context

def callback_save(request):
    if request.GET:
        d = datetime.now() + timedelta(hours=3)
        call = Callback(number_phone=request.GET['number'], name=request.GET['name'], pk_user=request.GET['user'], time_of_appeal=d.time(), date_of_appeal=d.date())
        call.save()
        return HttpResponse('s')

def home(request):
    return render(request,"users/login.html")


def register(request):
    if request.user.is_superuser:
        if request.method == 'POST':
            r = {}
            for k, v in request.POST.items():
                if v == 'on':
                    r[k] = 'True'
                else:
                    r[k] = v

            if not r.get('viewing_phone_numbers'): r['viewing_phone_numbers'] = 'False'
            if not r.get('editing_objects'): r['editing_objects'] = 'False'
            if not r.get('adding_objects'): r['adding_objects'] = 'False'
            if not r.get('deleting_objects'): r['deleting_objects'] = 'False'
            if not r.get('attcs'): r['attcs'] = 'False'
            if not r.get('attraos'): r['attraos'] = 'False'
            if not r.get('attclients'): r['attclients'] = 'False'
            if not r.get('attcrs'): r['attcrs'] = 'False'
            if not r.get('attaacs'): r['attaacs'] = 'False'
            if not r.get('attcas'): r['attcas'] = 'False'

            if CustomUser.objects.filter(username=r.get('mail')).exists():
                return redirect('adduser')
            else:
                CustomUser.objects.create_user(username=r.get('mail'),
                                               status=True,
                                               last_name=r.get('last_name'),
                                               first_name=r.get('first_name'),
                                               patronymic=r.get('patronymic'),
                                               password=r.get('password'),
                                               company=r.get('company'),
                                               number_phone=r.get('number_phone'),
                                               mail=r.get('mail'),
                                               email=r.get('mail'),
                                               type_of_transaction=r.get('type_of_transaction'),
                                               property_type=r.get('user-apart-agent'),
                                               viewing_phone_numbers=r.get('viewing_phone_numbers'),
                                               editing_objects=r.get('editing_objects'),
                                               adding_objects=r.get('adding_objects'),
                                               deleting_objects=r.get('deleting_objects'),
                                               attcs=r.get('attcs'),
                                               attraos=r.get('attraos'),
                                               attclients=r.get('attclients'),
                                               attcrs=r.get('attcrs'),
                                               attaacs=r.get('attaacs'),
                                               attcas=r.get('attcas'),
                                               vk=r.get('vk'),
                                               instagram=r.get('inst'),
                                               telegram=r.get('telegram'),
                                               img=request.FILES['user_image'])
                return redirect('all_users')
        else:
            return render(request, 'users/add_user.html')
    else:
        HttpResponse('Вы не администратор')

class AllUsersView(ListView):
    model = CustomUser
    template_name = "users/users.html"
    context_object_name = 'user'

    def get(self, request, *args, **kwargs):
        obj = CustomUser.objects.all()
        paginator = Paginator(obj, 10)  # Show 25 contacts per page.
        page_obj = paginator.get_page(request.GET.get('page'))
        return render(request, 'users/users.html',
                      {'user': page_obj})


class UsersDetail(DetailView):
    model = CustomUser
    template_name = "users/post_user.html"
    context_object_name = 'user'

def user_delete(request):
    if request.method == 'GET':
        CustomUser.objects.get(pk=request.GET['user_id']).delete()
        return HttpResponse("Success!")  # Sending an success response
    else:
        return HttpResponse("Request method is not a GET")


def user_update_status(request):
    if request.method == 'GET':
        user = CustomUser.objects.get(pk=request.GET['user_id'])
        user.status = bool(int(request.GET['status']))
        user.save()
        if request.GET['mob'] == 'mob':
            if bool(int(request.GET['status'])):
                return HttpResponse(
                    f'<button type="button" class="btn btn-dark button-admin-1" id="user_status_mob{request.GET["user_id"]}" onclick="status_user_mob({request.GET["user_id"]});" href="#" data-userid="{request.GET["user_id"]}" data-status="0">Заблокировать</button>')
            else:
                return HttpResponse(
                    f'<button type="button" class="btn btn-dark button-admin-4" id="user_status_mob{request.GET["user_id"]}" onclick="status_user_mob({request.GET["user_id"]});" href="#" data-userid="{request.GET["user_id"]}" data-status="1">Активировать</button>')
        else:
            if bool(int(request.GET['status'])):
                return HttpResponse(
                    f'<button type="button" class="btn btn-dark button-admin-1" id="user_status{request.GET["user_id"]}" onclick="status_user({request.GET["user_id"]});" href="#" data-userid="{request.GET["user_id"]}" data-status="0">Заблокировать</button>')
            else:
                return HttpResponse(
                    f'<button type="button" class="btn btn-dark button-admin-4" id="user_status{request.GET["user_id"]}" onclick="status_user({request.GET["user_id"]});" href="#" data-userid="{request.GET["user_id"]}" data-status="1">Активировать</button>')
    else:
        return HttpResponse("Request method is not a GET")

def update(request, pk):
    user = CustomUser.objects.filter(pk=pk)
    if request.user.is_superuser:
        if request.method == 'POST':
            res = request.POST
            res._mutable = True
            res.pop('csrfmiddlewaretoken')
            user_l = ['username', 'last_name', 'first_name', 'patronymic', 'company', 'number_phone', 'mail',
                      'telegram', 'vk', 'instagram', 'type_of_transaction', 'property_type', 'viewing_phone_numbers',
                      'editing_objects', 'adding_objects', 'deleting_objects', 'attcs', 'attraos', 'attclients',
                      'attcrs', 'attaacs', 'attcas']

            for i in user_l:
                if i not in res:
                    res[i] = 0

            result = {}
            for k, v in res.items():
                if v == 'on':
                    result[k] = 1
                else:
                    result[k] = v
            user.update(**result)
            user_p = user[0]

            if request.FILES.get('user_image'):
                user_photo = CustomUser.objects.get(pk=pk)
                user_photo.img = request.FILES.get('user_image')
                user_photo.save()
            if request.POST['password'] != '':
                user_p.set_password(request.POST['password'])
                user_p.save()
            return redirect('/admin-panel/users/')
        else:
            return render(request, 'users/edit_user.html', {'user': user.get()})
    else:
        return HttpResponse('Вы не администратор')

def filter(request):
    if request.method == 'GET':
        user = CustomUser.objects.filter(first_name__contains=request.GET.get('first_name'),
                                         last_name__contains=request.GET.get('last_name'),
                                         company__contains=request.GET.get('company'),
                                         number_phone__contains=request.GET.get('number_phone'),
                                         mail__contains=request.GET.get('email'))
        response_data = render_to_string('users/user_get.html', {'user': user})
        return HttpResponse(response_data)



class SettingsView(ListView):
    model = HistoryAuth
    template_name = "users/settings/settings_account.html"
    context_object_name = 'user_auth'

def auth_history(request):
    users = HistoryAuth.objects.all()
    return render(request, 'users/settings/settings_history.html', {'user': users})


