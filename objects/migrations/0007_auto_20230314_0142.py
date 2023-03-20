# Generated by Django 3.1.14 on 2023-03-13 22:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('objects', '0006_auto_20230313_2301'),
    ]

    operations = [
        migrations.AddField(
            model_name='objects',
            name='bath',
            field=models.BooleanField(default=False, verbose_name='Ванна'),
        ),
        migrations.AddField(
            model_name='objects',
            name='bed',
            field=models.BooleanField(default=False, verbose_name='Кровать'),
        ),
        migrations.AddField(
            model_name='objects',
            name='city_view',
            field=models.BooleanField(default=False, verbose_name='Вид на сити'),
        ),
        migrations.AddField(
            model_name='objects',
            name='corner',
            field=models.BooleanField(default=False, verbose_name='Угол'),
        ),
        migrations.AddField(
            model_name='objects',
            name='furniture',
            field=models.BooleanField(default=False, verbose_name='Мебель'),
        ),
        migrations.AddField(
            model_name='objects',
            name='gorod_view',
            field=models.BooleanField(default=False, verbose_name='Вид на город'),
        ),
        migrations.AddField(
            model_name='objects',
            name='household_appliances',
            field=models.BooleanField(default=False, verbose_name='Бытовые приборы'),
        ),
        migrations.AddField(
            model_name='objects',
            name='kitchen_living',
            field=models.BooleanField(default=False, verbose_name='Кухня гостиная'),
        ),
        migrations.AddField(
            model_name='objects',
            name='laundry_room',
            field=models.BooleanField(default=False, verbose_name='Постирочная'),
        ),
        migrations.AddField(
            model_name='objects',
            name='master_bedroom',
            field=models.BooleanField(default=False, verbose_name='Мастер-спальня'),
        ),
        migrations.AddField(
            model_name='objects',
            name='shower',
            field=models.BooleanField(default=False, verbose_name='Душ'),
        ),
        migrations.AddField(
            model_name='objects',
            name='wardrobe',
            field=models.BooleanField(default=False, verbose_name='Гардеробная'),
        ),
    ]