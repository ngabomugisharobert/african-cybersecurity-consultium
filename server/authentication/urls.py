from authentication import views
from django.urls import path

urlpatterns = [
    path('register', views.RegisterAPIView.as_view(), name='register'),
    path('login', views.LoginAPIView.as_view(), name='login'),
    path('user', views.AuthUserAPIView.as_view(), name='user'),
    path('email-verify', views.VerifyEmail.as_view(), name='email-verify'),
    path('users', views.GetUsers.as_view(), name='get_users'),
    path('implementers', views.GetImplementers.as_view(), name='get_implementers'),
]
