import json

from django import template
from django.core import serializers
from django.urls import resolve, Resolver404

from objects.models import Images, Objects
from users.models import CustomUser, Wishlist

register = template.Library()

@register.filter
def price(value):
    formatted_number = '{0:,}'.format(int(value)).replace(',', ' ')
    return formatted_number

@register.filter
def carousel_active(value):
    r = Images.objects.filter(note=value)
    return r[:1]

@register.filter
def carousel(value):
    r = Images.objects.filter(note=value)
    return r[1:]

@register.filter
def carousel_len_stand(value):
    r = Images.objects.filter(note=value)
    o = Objects.objects.get(pk=value)
    return len(r)

@register.filter
def carousel_len(value):
    r = Images.objects.filter(note=value)
    o = Objects.objects.get(pk=value)
    if o.youtube_url:
        if o.plan:
            return len(r) + 2
        else:
            return len(r) + 1
    else:
        if o.plan:
            return len(r) + 1
        else:
            return len(r)

@register.filter
def carousel_v(value):
    r = Images.objects.filter(note=value)
    return r[1:4]

@register.filter
def carousel_vs(value):
    r = Images.objects.filter(note=value).last().image.url
    return r

@register.filter
def carousel_v_len(value):
    r = Images.objects.filter(note=value)
    return len(r[5:])

@register.filter
def user_img(value):
    r = CustomUser.objects.filter(pk=value)
    return r[0].img

@register.filter
def user(value):
    r = CustomUser.objects.filter(pk=value)
    return f'{r[0].last_name} {r[0].first_name}'

@register.filter
def user_company(value):
    r = CustomUser.objects.filter(pk=value)
    return r[0].company

@register.simple_tag
def active_page(request, view_name):
    if not request:
        return ""
    try:
        print("active" if resolve(request.path_info).url_name == view_name else "")
        return "active" if resolve(request.path_info).url_name == view_name else ""
    except Resolver404:
        return ""

@register.simple_tag
def active_page_admin(request, view_name):
    if not request:
        return ""
    try:
        print("active" if resolve(request.path_info).url_name == view_name else "")
        return "menu-left-admin-active" if resolve(request.path_info).url_name == view_name else "menu-left-admin"
    except Resolver404:
        return "menu-left-admin"

@register.simple_tag
def active_page_admin_text(request, view_name):
    if not request:
        return ""
    try:
        return "text-admin-menu-active" if resolve(request.path_info).url_name == view_name else "text-admin-menu"
    except Resolver404:
        return "text-admin-menu"

@register.filter
def check_wishlist(obj, request):
    user = CustomUser.objects.get(pk=request.user.pk)
    r = Wishlist.objects.filter(pk_obj=obj, note=user)
    print(r)
    return r

@register.filter
def number_phone_1(obj):
    return obj.split(' ')[0]

@register.filter
def number_phone_2(obj):
    if len(obj.split(' ')) > 1:
        return obj.split(' ')[1]
    else:
        return None