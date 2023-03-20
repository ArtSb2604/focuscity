from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import User, AbstractUser
from django.db import models

# Create your models here.
from users.choices import choices_property_type, choices_type_of_transaction





class CustomUser(AbstractUser):
    status = models.BooleanField(default=True, verbose_name="Статус пользователя")
    patronymic = models.CharField(max_length=40, verbose_name="Отчество")
    company = models.CharField(max_length=40, verbose_name="Компания")
    number_phone = models.CharField(max_length=40, verbose_name="Номер телефона")
    mail = models.CharField(max_length=40, verbose_name="Mail", unique=True)
    telegram = models.CharField(max_length=40, verbose_name="Telegram", null=True, blank=True)
    vk = models.CharField(max_length=40, verbose_name="VK", null=True, blank=True)
    instagram = models.CharField(max_length=40, verbose_name="Instagram", null=True, blank=True)
    type_of_transaction = models.CharField(max_length=40, verbose_name="Вид сделки")
    property_type = models.CharField(max_length=40, verbose_name="Тип недвижимости")
    viewing_phone_numbers = models.BooleanField(default=True, verbose_name="Просмотр номеров телефона")
    editing_objects = models.BooleanField(default=True, verbose_name="Редактирование объектов")
    adding_objects = models.BooleanField(default=False, verbose_name="Добавление объектов")
    deleting_objects = models.BooleanField(default=True, verbose_name="Удаление объектов")
    attcs = models.BooleanField(default=False, verbose_name="Доступ к разделу “обратный звонок”")
    attraos = models.BooleanField(default=True, verbose_name="Доступ к разделу “напоминания об объектах”")
    attclients = models.BooleanField(default=False, verbose_name="Доступ к разделу “клиенты”")
    attcrs = models.BooleanField(default=False, verbose_name="Доступ к разделу “напоминание по клиентам”")
    attaacs = models.BooleanField(default=True, verbose_name="Доступ к разделу “добавление клиента”")
    attcas = models.BooleanField(default=False, verbose_name="Доступ к разделу “архив  клиентов”")
    img = models.ImageField(upload_to='user_img/')

    def __str__(self):
        return self.mail

