from django.shortcuts import render
from userauths.forms import UserRegisterForm

# Create your views here.

def init_reg_view(request):
    return render(request, 'userauths/initial-register.html')

def reg_customer_view(request):
    if request.method == 'POST':
        print("User registered successfully")
    else:
        print("The user cannot be registered")
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

