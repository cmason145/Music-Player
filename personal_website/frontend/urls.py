from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('join', index),
    path('create', index),
    path('projects', index),
    path('about_me', index),
    path('resume', index)
]