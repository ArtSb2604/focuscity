from django.urls import include, path
from . import views

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
from .views import register, AllUsersView, UsersDetail, SettingsView

urlpatterns = [
    path('adduser/', views.register, name="adduser"),
    path("users/", AllUsersView.as_view(), name="all_users"),
    path("users/<int:pk>/", UsersDetail.as_view(), name="all_users"),
    path("users/delete_user", views.user_delete, name="delete_user"),
    path("users/user_update_status", views.user_update_status, name="user_update_status"),
    path('users/update/<int:pk>/', views.update, name="update"),
    path('users/filter/', views.filter, name="filter"),

    path('setting/', SettingsView.as_view(), name="setting"),
    path('setting/auth_history', views.auth_history, name="auth_history"),
]