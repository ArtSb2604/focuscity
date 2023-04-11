from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from django.views.generic import TemplateView

from objects import views
from objects.views import AllObjects, ObjectDetailView, ObjectEditView

urlpatterns = [
    path('', AllObjects.as_view(), name="all_objects"),
    path('<int:pk>/', ObjectDetailView.as_view(), name="object"),
    path('edit/<int:pk>/', ObjectEditView.as_view(), name="edit_object"),
    path('filter/', views.filter, name="filter"),
    path('add_wishlist/', views.add_wishlist, name="add_wishlist"),
    path('filter_ind/', views.filter_ind, name="filter_ind"),
    path('filtering/', views.filtering, name="filtering"),
    path('add_object/filter_add_object/', views.cat_add_object, name="filter_add_object"),
    path('add_object/', views.add_object, name="add_object"),
    path('add_object/select_cat/', views.select_cat, name="select_cat"),
    path('delete_obj/', views.delete_obj, name="delete_obj"),
    path('edit_status/', views.edit_status, name="edit_status"),
    path('edit_status_ind/', views.edit_status_ind, name="edit_status_ind"),
    path('delete_photo/', views.delete_photo, name="delete_photo"),
    path('modalslider/', views.modalslider, name="modalslider"),
]