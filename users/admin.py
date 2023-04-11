from django.contrib import admin
from users.models import CustomUser, HistoryAuth, Callback, Wishlist


class ColorsInLine(admin.StackedInline):
    model = Wishlist
    extra = 1

@admin.register(CustomUser)
class ProductsAdmin(admin.ModelAdmin):
    inlines = [ColorsInLine,]

admin.site.register(HistoryAuth)
admin.site.register(Callback)
