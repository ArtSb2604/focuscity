# Generated by Django 3.1.14 on 2023-03-14 18:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('objects', '0011_auto_20230314_1736'),
    ]

    operations = [
        migrations.AddField(
            model_name='objects',
            name='your_own_farm',
            field=models.IntegerField(blank=True, null=True, verbose_name='Свой с/у'),
        ),
    ]
