# Generated by Django 3.1.14 on 2023-03-08 21:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='name',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='surname',
        ),
    ]