# Generated by Django 5.0.6 on 2024-06-29 09:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0010_booking'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='capacity',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='roomnumber',
            name='full_reservation',
            field=models.BooleanField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='roomnumber',
            name='max_capacity',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
