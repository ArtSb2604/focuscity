from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from django.views.generic import TemplateView

from index import views
from index.views import Index, ContactsView

urlpatterns = [
    path('', Index.as_view(), name="index"),
    path('login/', views.login_ac, name='login'),
    path('contacts', ContactsView.as_view(), name='contacts')
]