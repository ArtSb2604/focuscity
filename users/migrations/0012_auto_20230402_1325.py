# Generated by Django 3.1.14 on 2023-04-02 10:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0011_wishlist'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wishlist',
            name='pk_obj',
            field=models.CharField(max_length=40, unique=True, verbose_name='Номер объекта'),
        ),
    ]
