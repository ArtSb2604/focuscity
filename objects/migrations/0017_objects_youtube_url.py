# Generated by Django 3.1.14 on 2023-04-02 10:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('objects', '0016_auto_20230323_1908'),
    ]

    operations = [
        migrations.AddField(
            model_name='objects',
            name='youtube_url',
            field=models.CharField(blank=True, max_length=15000, null=True, verbose_name='Ссылка на видео'),
        ),
    ]
