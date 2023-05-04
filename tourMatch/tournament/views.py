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
        tournament_name = form.cleaned_data['tournament_name']
        random = form.cleaned_data['random']
        match_count = 1
        number_match = 0
        stage = list("ABCDEFGHIJKLMNOP")
        if participants_data == '1':
            participants = list(range(1, 17))
            if random:
                participants = randomize(participants)
            else:
                participants = returnList(participants)
            return render(request, 'tournament/create_tournament_16.html', {'participants': participants, 'number_match': number_match, 'match_count': match_count, 't_name': tournament_name})
        elif participants_data == '2':
            participants = list(range(1, 33))
            if random:
                participants = randomize(participants)
            else:
                participants = returnList(participants)
            return render(request, 'tournament/create_tournament_32.html', {'participants': participants, 'number_match': number_match, 'match_count': match_count, 't_name': tournament_name})
        elif participants_data == '3':
            participants = list(range(1, 65))
            if random:
                participants = randomize(participants)
            else:
                participants = returnList(participants)
            return render(request, 'tournament/create_tournament_64.html', {'participants': participants, 'stage': stage, 'number_match': number_match, 'match_count': match_count, 't_name': tournament_name})
        else:
            return render(request, 'tournament/fail.html')
    else:
        form = TournamentForm
    return render(request, 'tournament/set_tournament.html', {'form': form})

def randomize(list):
    randomized = []
    while(len(list)>0):
        sublist = []
        for i in range(0, 4):
            sublist.append(list.pop(random.randint(0, len(list)-1)))
            if i == 3:
                randomized.append(sublist)
    return randomized

def returnList(list):
    non_random = []
    chunk_size = 4
    while(len(list)>0):
        chunk, list = list[:chunk_size], list[chunk_size:]
        non_random.append(chunk)

    return non_random