from django.shortcuts import render

from .models import Appointment

def index(request):
    if request.method == 'POST':
        date = request.POST['appt_date']
        time = request.POST['appt_time']
        description = request.POST['appt_description']
        appt = Appointment(date=date, time=time, description=description)
        appt.save()

    # if request.method == 'GET':
        # TODO: and they want json data from ajax, return json

    latest_appointment_list = Appointment.objects.order_by('-date')[:5]
    context = {'latest_appointment_list': latest_appointment_list}
    return render(request, 'appointments/index.html', context)

def post(self, request):
    print("this is a post, pretty sure this never happens")
    return HttpResponse(json.dumps({'key': 'value'}), mimetype="application/json")
