from django.db import models

class Appointment(models.Model):
    date = models.DateTimeField('date')
    time = models.DateTimeField('time')
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.description
