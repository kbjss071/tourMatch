from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .forms import TournamentForm

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
            participants = 16
            return render(request, 'tournament/create_tournament_16.html', {'participants': range(int(participants))})
        elif participants_data == '2':
            participants = 32
            return render(request, 'tournament/create_tournament_32.html', {'participants': range(int(participants))})
        elif participants_data == '3':
            participants == 64
            return render(request, 'tournament/create_tournament_64.html', {'participants': range(int(participants))})
        else:
            return render(request, 'tournament/fail.html')
    else:
        form = TournamentForm
    return render(request, 'tournament/set_tournament.html', {'form': form})

