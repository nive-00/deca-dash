from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
# class User(AbstractUser):
#     username = models.CharField(max_length=100)
#     email = models.EmailField('email address',unique=True)
#     firstname = models.CharField(max_length=20)
#     lastname = models.CharField(max_length=20)
#     phone_number = models.CharField(max_length=11,unique=True)


#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = [username]

#     def __str__(self):
#         return self.username

class User(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=100)
    #phone_number = models.CharField(max_length=100)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [username,email]

    def __str__(self):
        return self.username
    
# class Admin(AbstractUser):
#     email = models.EmailField(unique=True)
#     username = models.CharField(max_length=100)

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = [username,email]

#     def __str__(self):
#         return self.username
    
# class Seller(AbstractUser):
#     pass

# class Customer(AbstractUser):
#     pass