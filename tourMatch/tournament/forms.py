from django.contrib.auth import get_user_model
from django import forms
from . import models


class TournamentForm(forms.ModelForm):
    choice = [(1, "16"),(2, "32"),(3, "64")]
    participants_choice = forms.ChoiceField(choices=choice, widget=forms.Select(attrs={'class': 'form-control'}))
    class Meta:
        model = models.Tournament
        fields = ('tournament_name', 'participants_choice')