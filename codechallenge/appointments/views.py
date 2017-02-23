from django.shortcuts import render

from .models import Appointment

def index(request):
    latest_appointment_list = Appointment.objects.order_by('-date')[:5]
    context = {'latest_appointment_list': latest_appointment_list}
    return render(request, 'appointments/index.html', context)

def new(request, date, time, description):
    appointment = get_object_or_404(Appointment, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'polls/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))
