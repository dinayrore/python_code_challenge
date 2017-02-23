from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.core import serializers

from .models import Appointment

def index(request):
    if request.method == 'POST':
        date = request.POST['appt_date']
        time = request.POST['appt_time']
        description = request.POST['appt_description']
        appt = Appointment(date=date, time=time, description=description)
        appt.save()
        return HttpResponseRedirect('/')

    appointments = Appointment.objects.order_by('-date')
    context = {'latest_appointment_list': appointments}
    return render(request, 'appointments/index.html', context)

def getAppointments(request):
    appointments = Appointment.objects.order_by('-date')

    if 'search' in request.GET:
        search_term = request.GET['search']
        appointments = appointments.filter(description__contains=search_term)

    data = serializers.serialize('json', appointments)
    return HttpResponse(data, content_type='application/json')
