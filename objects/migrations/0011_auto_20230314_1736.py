# Generated by Django 3.1.14 on 2023-03-14 14:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('objects', '0010_objects_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='objects',
            name='bath',
            field=models.IntegerField(blank=True, null=True, verbose_name='Ванна'),
        ),
        migrations.AlterField(
            model_name='objects',
            name='bed',
            field=models.IntegerField(blank=True, null=True, verbose_name='Кровать'),
        ),
        migrations.AlterField(
            model_name='objects',
            name='city_view',
            field=models.IntegerField(blank=True, null=True, verbose_name='Вид на сити'),
        ),
        migrations.AlterField(
            model_name='objects',
            name='corner',
            field=models.IntegerField(blank=True, null=True, verbose_name='Угол'),
        ),
        migrations.AlterField(
            model_name='objects',
            name='furniture',
            field=models.IntegerField(blank=True, null=True, verbose_name='Мебель'),
        ),
        migrations.AlterField(
            model_name='objects',
            name='gorod_view',
            field=models.IntegerField(blank=True, null=True, verbose_name='Вид на город'),
        ),
        migrations.AlterField(
            model_name='objects',
            name='household_appliances',
            field=models.IntegerField(blank=True, null=True, verbose_name='Бытовые приборы'),
        ),
        migrations.AlterField(
            model_name='objects',
            name='kitchen_living',
            field=models.IntegerField(blank=True, null=True, verbose_name='Кухня гостиная'),
        ),
        migrations.AlterField(
            model_name='objects',
            name='laundry_room',
            field=models.IntegerField(blank=True, null=True, verbose_name='Постирочная'),
        ),
        migrations.AlterField(
            model_name='objects',
            name='master_bedroom',
            field=models.IntegerField(blank=True, null=True, verbose_name='Мастер-спальня'),
        ),
        migrations.AlterField(
            model_name='objects',
            name='shower',
            field=models.IntegerField(blank=True, null=True, verbose_name='Душ'),
        ),
        migrations.AlterField(
            model_name='objects',
            name='wardrobe',
            field=models.IntegerField(blank=True, null=True, verbose_name='Гардеробная'),
        ),
    ]