from django import forms

from objects.choices import *
from objects.models import Images, Objects

TYPE_SELECT = (
        ('0', 'Female'),
        ('1', 'male'),
    )


class ApartmentForm(forms.Form):
    rooms = forms.ChoiceField(widget=forms.RadioSelect(attrs={'class':'btn-check button-add-type-3'}),choices=TYPE_SELECT)
    rooms.label = ('btn btn-secondary button-add-type-3',)