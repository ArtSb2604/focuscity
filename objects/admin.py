from django.contrib import admin

# Register your models here.
from objects.models import Objects, Images


class ColorsInLine(admin.StackedInline):
    model = Images
    extra = 1

@admin.register(Objects)
class ProductsAdmin(admin.ModelAdmin):
    inlines = [ColorsInLine,]