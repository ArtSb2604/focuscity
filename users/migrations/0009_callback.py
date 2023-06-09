# Generated by Django 3.1.14 on 2023-03-24 09:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_historyauth'),
    ]

    operations = [
        migrations.CreateModel(
            name='Callback',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40, verbose_name='Имя')),
                ('number_phone', models.CharField(max_length=40, verbose_name='Номер телефона')),
                ('mail', models.CharField(max_length=40, verbose_name='Электронная почта')),
                ('time_of_appeal', models.TimeField(verbose_name='Время обращения')),
                ('date_of_appeal', models.DateField(verbose_name='Дата обращения')),
            ],
        ),
    ]
