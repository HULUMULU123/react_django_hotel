from django.urls import path
from . import views
from . import payments
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/', views.registerUser, name='register'),

    path('', views.getRoutes, name='routes'),
    path('about/', views.getAbout, name='about'),
    path('aboutRooms/', views.getAboutRooms, name='aboutRooms'),
    path('rooms/', views.getRooms, name='rooms'),
    path('rooms/<int:roomId>', views.getRoom, name='room'),
    path('booking/<str:startDate>/<str:endDate>/<str:guests>/', views.booking, name='booking'),


    path('users/profile', views.getUserInformation, name='getUser'),

    path('users/mybookings/<str:email>/', views.myBookings, name='mybookings'),
    path('users/allbookings/', views.allBookings, name='allbookings'),
    path('users/customerinf/<str:email>/', views.customerInformation, name='customerInformation'),
    path('users/changeemail/', views.changeEmail, name='changeEamil'),
    path('payment/', payments.payment_func, name='payment'),
    path('success/', payments.payment_list, name='success')
]