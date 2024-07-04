from django.shortcuts import render, redirect
from userauths.forms import UserRegisterForm 

# Create your views here.

def init_reg_view(request):
    return render(request, 'userauths/initial-register.html')

def otp_view(request):
    return render(request, 'userauths/otp-verification.html')

def otp2_view(request):
    return render(request, 'userauths/otp-verification2.html')

def shop_register_view(request):
    return render(request, 'userauths/shopregister.html')

def shop_final_register_view(request):
    return render(request, 'userauths/shopfinalregister.html')

def seller_dashboard_view(request):
    return render(request, 'userauths/seller_dashboard.html')

def final_register_view(request):
    return render(request, 'userauths/finalregister.html')

def index_view(request):
    return render(request,'userauths/index.html')

def login_view(request):
    return render(request,'userauths/login.html')

def cart_view(request):
    return render(request,'userauths/cart_page.html')

def reg_customer_view(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST or None)
        if form.is_valid():
            form.save()

    else:
        form = UserRegisterForm()
    
    context = {
        'form':form
    }
    return render(request, 'userauths/registerCustomer.html', context)

def reg_seller_view(request):
    if request.method == 'POST':
        print("User registered successfully")
    else:
        print("The user cannot be registered")
    form = UserRegisterForm()
    context = {
        'form':form
    }
    return render(request, 'userauths/registerSeller.html', context)

# def customer_register_view(request):
#     return render

