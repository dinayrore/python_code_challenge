from django.shortcuts import render

from .models import Appointment

def index(request):
    latest_appointment_list = Appointment.objects.order_by('-date')[:5]
    context = {'latest_appointment_list': latest_appointment_list}
    return render(request, 'appointments/index.html', context)
