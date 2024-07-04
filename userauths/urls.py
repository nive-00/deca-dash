from django.urls import path
from userauths import views

app_name = 'userauths'

urlpatterns = [
    #path("sign-up/", views.register_view, name='sign-up'),
    path("initial-register/", views.init_reg_view, name='initial-register'),   
    path("register-customer/", views.reg_customer_view, name='register-customer'),   
    path("register-seller/", views.reg_seller_view, name='register-seller'),      
]
