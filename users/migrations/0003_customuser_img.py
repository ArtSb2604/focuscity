# Generated by Django 3.1.14 on 2023-03-09 09:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20230309_0025'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='img',
            field=models.ImageField(default=1, upload_to='user_img', verbose_name='Фото профиля'),
            preserve_default=False,
        ),
    ]