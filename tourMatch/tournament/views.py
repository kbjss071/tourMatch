from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .forms import TournamentForm
import random

# Create your views here.
@login_required
def tournament_detail (request):
    return 

@login_required
def tournamnet_list(request):
    return


def create_tournament(request):
    form = TournamentForm(request.POST)
    if form.is_valid():
        participants_data = form.cleaned_data['participants_choice']
        participants = 0
        if participants_data == '1':
            participants = randomize(list(range(1, 17)))
            return render(request, 'tournament/create_tournament_16.html', {'participants': participants})
        elif participants_data == '2':
            participants = randomize(list(range(1, 33)))
            return render(request, 'tournament/create_tournament_32.html', {'participants': participants})
        elif participants_data == '3':
            participants == randomize(list(range(1, 65)))
            return render(request, 'tournament/create_tournament_64.html', {'participants': participants})
        else:
            return render(request, 'tournament/fail.html')
    else:
        form = TournamentForm
    return render(request, 'tournament/set_tournament.html', {'form': form})

def randomize(list):
    randomized = []
    while(len(list)>0):
        randomized.append(list.pop(random.randint(0, len(list)-1)))
    return randomized