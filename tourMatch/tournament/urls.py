from django.urls import path
from . import views, forms

app_name = 'tournament'

urlpatterns = [
    path('by/<username>/', views.tournamnet_list, name="list"),
    path('by/<username>/<int:pk>', views.tournament_detail, name="detail"),
    path('simulate/', views.create_tournament, name="simulate"),
]