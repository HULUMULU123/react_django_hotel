# Generated by Django 5.0.6 on 2024-07-12 11:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0012_booking_booking_status_booking_paid'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='user_email',
            field=models.CharField(default=1),
            preserve_default=False,
        ),
    ]
