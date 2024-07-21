from typing import Dict
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

import datetime
from itertools import chain
from operator import attrgetter

from .about import about
from .models import About, AboutRooms, Room, RoomNumber, Booking, Custumer
from .serailizers import AboutSerializer, AboutRoomsSerializer, RoomSerializer, RoomsNumbersSerializer, UserSerializer, UserSerialiserWithToken, BookingSerializer, CustomerSerializer
# Create your views here.
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import status
import time


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs: Dict[str, any]) -> Dict[str, str]:
        data = super().validate(attrs)

        serializer = UserSerialiserWithToken(self.user).data
        for k, v in serializer.items():
            data[k]=v
        return data
    # @classmethod
    # def get_token(cls, user):
    #     token = super().get_token(user)

    #     # Add custom claims
    #     token['username'] = user.username
    #     token['message'] = 'hello world'
    #     # ...

    #     return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserInformation(request):
    
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data)

@api_view(['POST'])
def registerUser(request):
    data = request.data
    print(data)
    try:
        user = User.objects.create(first_name=data['name'], username=data['email'],
                                email=data['email'], password=make_password(data['password']))
        customer = Custumer.objects.create(user=user)
        serializer = UserSerialiserWithToken(user, many=False)
        return Response(serializer.data)
    except: 
        message = {
            'detail': 'User with this email already exists'
        }
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/about/',
        '/api/aboutRooms',

        'api/bookings/',

        'api/rooms/',
        'api/rooms/<id>/',

        'api/contacts/'
    ]
    return Response(routes)

@api_view(['GET'])
def getAbout(request): 
    about = About.objects.all()
    serializer = AboutSerializer(about, many=True)
    
    return Response(serializer.data)

@api_view(['GET'])
def getAboutRooms(request):
    about_rooms = AboutRooms.objects.all()
    serializer = AboutRoomsSerializer(about_rooms, many=True)
    
    return Response(serializer.data)


@api_view(['GET'])
def getRooms(request):
    primary_key=request.GET.get('roomId',None)
    if primary_key is not None: 
        room = Room.objects.filter(pk=primary_key)
        serializer = RoomSerializer(room, many=True)
        return Response(serializer.data)
    rooms = Room.objects.all()
    serializer = RoomSerializer(rooms, many=True)

    return Response(serializer.data)

@api_view(['GET'])
def getRoom(request, roomId):
    room = Room.objects.filter(pk=roomId)
    serializer = RoomSerializer(room, many=True)
    print(room)
    return Response(serializer.data)

months = {
    'Jan':'01',
    'Feb':'02',
    'Mar':'03',
    'Apr':'04',
    'May':'05',
    'Jun':'06',
    'Jul':'07',
    'Aug':'08',
    'Sep':'09',
    'Oct':'10',
    'Nov':'11',
    'Dec':'12',
}
@api_view(['GET'])
def booking(request, startDate, endDate, guests):

    start_list = [int(startDate[:4]), int(months[startDate[5:8]]),int(startDate[9:])]
    end_list = [int(endDate[:4]), int(months[endDate[5:8]]),int(endDate[9:])]
    
    start_date = datetime.date(start_list[0], start_list[1],start_list[2])
    print(start_date, 'starts')
    end_date = datetime.date(end_list[0], end_list[1],end_list[2])
    guests = int(guests)

    all_bookings = Booking.objects.all().order_by('-start_date')
    rooms_list_booking = [int(i.room_number.room_number) for i in all_bookings]
    sorted_bookings = list()

    all_rooms = RoomNumber.objects.all()
    if len(rooms_list_booking)>0:
        available_rooms_numbers = RoomNumber.objects.exclude(room_number__in=rooms_list_booking)
        rooms_number_booking = [int(i.room_id.id) for i in available_rooms_numbers]
        not_avaiable_rooms = RoomNumber.objects.filter(room_number__in=rooms_list_booking)
        booking_list = Booking.objects.filter(room_number__in=rooms_list_booking)
        available_rooms = Room.objects.filter(pk__in=rooms_number_booking)
    else:
        available_rooms_numbers = all_rooms
    if len(all_bookings) == 0: 
        room = Room.objects.all()
        print('free')
        serializer = RoomSerializer(room, many=True)
        return Response(serializer.data)

    for room in not_avaiable_rooms:
        bookings = Booking.objects.filter(room_number=room)
        
        for booking in bookings:
            
            if booking.start_date>end_date or booking.end_date < start_date:
                
                sorted_bookings.append(room.room_id.id)

    rooms = Room.objects.filter(pk__in=sorted_bookings)
    print(rooms,available_rooms_numbers)

    result = rooms | available_rooms
    serializer = RoomSerializer(result, many=True)
    
    return Response(serializer.data)


        
@api_view(['GET'])       
def myBookings(request, email):
    user = email
    print(request)
    user_bookings = Booking.objects.filter(user_email=user)

    
    serializer = BookingSerializer(user_bookings, many=True)
    
    return Response(serializer.data)

@api_view(['GET'])
def allBookings(request):
    user_bookings = Booking.objects.all().order_by('-start_date')
    serializer = BookingSerializer(user_bookings, many=True)
    
    return Response(serializer.data)

@api_view(['GET'])
def customerInformation(request, email):
    
    customer = Custumer.objects.filter(user__username=email)

    print(customer,email)
    serializer = CustomerSerializer(customer, many=True)
    return Response(serializer.data)


@api_view(['POST'])

def changeEmail(request):
    
    user = User.objects.get(username=request.data['email'])
    user.username = request.data['new_email']
    user.email = request.data['new_email']
    user.save()
    bookings = Booking.objects.filter(user_email=request.data['email'])
    for booking in bookings:
        booking.user_email = request.data['new_email']
        booking.save()
    return Response({'status': 'succes'})
