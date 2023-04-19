from django.contrib.auth import get_user_model
from django import forms
from . import models

class TournamentForm(forms.ModelForm):
    class Meta:
        model = models.Tournament
        fields = ('tournament_name')