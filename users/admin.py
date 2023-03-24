from django.contrib import admin
from users.models import CustomUser, HistoryAuth

admin.site.register(CustomUser)
admin.site.register(HistoryAuth)
