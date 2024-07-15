"""myntra_clone URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter 
from products.views import ProductViewSet
from orders.views import OrderViewSet
from accounts.views import ProfileViewSet
from django.urls import path
from django.views.generic import TemplateView

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'profiles', ProfileViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', TemplateView.as_view(template_name='index.html')),
    path('address/', TemplateView.as_view(template_name='address.html')),
    path('cart/', TemplateView.as_view(template_name='cart.html')),
    path('end/', TemplateView.as_view(template_name='end.html')),
    path('home_furnishing/', TemplateView.as_view(template_name='home_furnishing.html')),
    path('homeLiving/', TemplateView.as_view(template_name='homeLiving.html')),
    path('menHomePage/', TemplateView.as_view(template_name='menHomePage.html')),
    path('mens/', TemplateView.as_view(template_name='mens.html')),
    path('profile/', TemplateView.as_view(template_name='profile.html')),
    path('signup/', TemplateView.as_view(template_name='signup.html')),
    path('wishlist/', TemplateView.as_view(template_name='wishlist.html')),
    path('women/', TemplateView.as_view(template_name='women.html')),
    path('womenHomePage/', TemplateView.as_view(template_name='womenHomePage.html')),
    path('payment/', TemplateView.as_view(template_name='payment.html')),
    path('otp/', TemplateView.as_view(template_name='otp.html')),
]

