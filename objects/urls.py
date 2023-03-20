from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from django.views.generic import TemplateView

from objects import views
from objects.views import AllObjects, ObjectDetailView

urlpatterns = [
    path('', AllObjects.as_view(), name="all_objects"),
    path('<int:pk>/', ObjectDetailView.as_view(), name="object"),
    path('filter/', views.filter, name="filter"),
    path('filter_ind/', views.filter_ind, name="filter_ind"),
    path('filtering/', views.filtering, name="filtering"),
    path('add_object/filter_add_object/', views.cat_add_object, name="filter_add_object"),
    path('add_object/', views.add_object, name="add_object"),
    path('add_object/select_cat/', views.select_cat, name="select_cat"),
]