from django.db import models
from django.contrib.auth.models import User

import datetime


# Create your models here.


class About(models.Model):
    heading=models.CharField(verbose_name='Заголовок', null=False, max_length=100, blank=True)
    description=models.TextField(verbose_name='Описание', null=False, max_length=600, blank=True)
    image=models.ImageField(verbose_name='Фотография', upload_to='about/')

class AboutRooms(models.Model):
    heading=models.CharField(verbose_name='Заголовок', null=False, max_length=100, blank=True)
    description=models.TextField(verbose_name='Описание', null=False, max_length=600, blank=True)
    image=models.ImageField(verbose_name='Фотография', upload_to='about/')
    link=models.TextField(verbose_name='LINK')


class Room(models.Model):
    class Meta:
         verbose_name = "Номера"
         
    TYPE_OF_ROOM = (('HOSTEL', 'Хостел'),
                    ('MINI-HOTEL', 'Мини-отель'))

    name=models.CharField(verbose_name='Название', max_length=50, null=False)
    short_descriptio=models.TextField(verbose_name='Короткое описание', null=False)
    description=models.TextField(verbose_name='Описание', null=False)
    price=models.FloatField(verbose_name='Цена')
    image_1=models.ImageField(verbose_name='Фотография', upload_to='rooms/', )
    image_2=models.ImageField(verbose_name='Фотография', upload_to='rooms/')
    discount=models.IntegerField(verbose_name='Скидка', default=0)
    base_advatages=models.BooleanField(verbose_name='Базовые преимущества', default=True)
    large_bed=models.BooleanField(verbose_name='Королевская кровать', default=False)
    type_of_room = models.CharField(verbose_name='Тип комнаты', max_length=15, choices=TYPE_OF_ROOM, default="HOSTEL")


class RoomNumber(models.Model):
    class Meta:
        verbose_name = 'Номера комнат'
    room_id = models.ForeignKey(Room, on_delete=models.CASCADE)
    room_number = models.IntegerField(verbose_name='Номер комнаты')
    max_capacity = models.IntegerField()
    full_reservation = models.BooleanField()


class Booking(models.Model):

    STATUS_OF_BOOKING = (('UNCONFIRMED', 'UNCONFIRMED'),
                         ('CONFIRMED','CONFIRMED'),
                         ('CANCELED','CANCELED'))
    class Meta:
        verbose_name='Бронирование'

    room_number = models.ForeignKey(RoomNumber, on_delete=models.CASCADE)
    
    user_email = models.CharField()
    start_date = models.DateField(default=datetime.datetime.today)
    end_date = models.DateField(default=datetime.datetime.today)
    booking_status =  models.CharField(verbose_name='Статус бронирования', max_length=15, choices=STATUS_OF_BOOKING, default="UNCONFIRMED")
    paid = models.BooleanField(default=False)
    capacity = models.IntegerField()

class Custumer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bonuses = models.IntegerField(default=0)
    