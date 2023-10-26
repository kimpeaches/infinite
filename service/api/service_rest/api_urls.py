from django.urls import path
from .views import api_list_technicians, show_technician, api_list_appointments, show_appointments


urlpatterns = [
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("technicians/<int:pk>/", show_technician, name="show_technician"),
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    path("appointments/<int:pk>/", show_appointments, name="show_appointments"),
    path("appointments/<int:pk>/cancel/", show_appointments, name="show_appointments"),
    path("appointments/<int:pk>/finish/", show_appointments, name="show_appointments"),
]
