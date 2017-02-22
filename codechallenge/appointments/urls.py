from django.conf.urls import url


from . import views

urlpatterns = [
    # ex: /appointments/
    url(r'^$', views.index, name='index'),
]
