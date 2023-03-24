import json

from django import template
from django.core import serializers

from objects.models import Images
from users.models import CustomUser

register = template.Library()

@register.filter
def price(value):
    formatted_number = f'{value:,}'.replace(',', ' ')
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
def carousel_len(value):
    r = Images.objects.filter(note=value)
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