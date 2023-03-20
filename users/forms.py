from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from users.choices import choices_type_of_transaction, choices_property_type
from users.models import CustomUser


class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = CustomUser
        fields = ('username', 'last_name', 'first_name', 'patronymic', 'company', 'number_phone', 'mail', 'telegram', 'vk', 'instagram',
                  'type_of_transaction', 'property_type', 'viewing_phone_numbers', 'editing_objects', 'adding_objects',
                  'deleting_objects', 'attcs', 'attraos', 'attclients', 'attcrs', 'attaacs', 'attcas', 'img')


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'last_name', 'first_name', 'patronymic', 'company', 'number_phone', 'mail', 'telegram', 'vk', 'instagram',
                  'type_of_transaction', 'property_type', 'viewing_phone_numbers', 'editing_objects', 'adding_objects',
                  'deleting_objects', 'attcs', 'attraos', 'attclients', 'attcrs', 'attaacs', 'attcas', 'img')
