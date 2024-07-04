from django.urls import path
from userauths import views

app_name = 'userauths'

urlpatterns = [
    #path("sign-up/", views.register_view, name='sign-up'),
    path("", views.login_view, name='login'), 
    path("initial-register/", views.init_reg_view, name='initial-register'),   
    path("register-customer/", views.reg_customer_view, name='register-customer'),   
    path("register-seller/", views.reg_seller_view, name='register-seller'),      
    path("otp-verification/", views.otp_view, name='otp-verification'), 
    path("otp-verification2/", views.otp2_view, name='otp-verification2'), 
    path("final-register/", views.final_register_view, name='final-register'), 
    path("home/", views.index_view, name='home'), 
    path("cart-page/", views.cart_view, name='cart-page'), 
    path("shop-register/", views.shop_register_view, name='shop-register'), 
    path("shop-final-register/", views.shop_final_register_view, name='shop-final-register'), 
    path("seller-dashboard/", views.seller_dashboard_view, name='seller-dashboard'), 
]
