# Generated by Django 3.1.14 on 2023-03-24 21:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0009_callback'),
    ]

    operations = [
        migrations.AddField(
            model_name='callback',
            name='pk_user',
            field=models.CharField(default=1, max_length=40, verbose_name='Пользователь'),
            preserve_default=False,
        ),
    ]
