from django.urls import path
from core import views

app_name = 'coref'

urlpatterns = [
    path("", views.index)
]