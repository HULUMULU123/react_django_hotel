from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import About, Room, AboutRooms, RoomNumber, Booking, Custumer



class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin']


    def get__id(self, obj):
        return obj.id 
    
    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name 

class UserSerialiserWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']


    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token)
    
class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model= About
        fields='__all__'

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model= Room
        fields='__all__'

class AboutRoomsSerializer(serializers.ModelSerializer):
    class Meta:
        model= AboutRooms
        fields='__all__'


class RoomsNumbersSerializer(serializers.ModelSerializer):
    class Meta:
        model=RoomNumber
        fields='__all__'

class BookingSerializer(serializers.ModelSerializer):
    room_id = serializers.SerializerMethodField()
    img_1 = serializers.SerializerMethodField()
    def get_room_id(self, booking):
        return booking.room_number.room_id.name
    
    def get_img_1(self, booking):
        return booking.room_number.room_id.image_1.url
    class Meta:
        model=Booking
        fields='__all__'

class CustomerSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()
    first_name = serializers.SerializerMethodField()
    
    def get_username(self, customer):
        return customer.user.username
    
    def get_first_name(self, customer):
        return customer.user.first_name
    
    class Meta:
        model=Custumer
        fields='__all__'