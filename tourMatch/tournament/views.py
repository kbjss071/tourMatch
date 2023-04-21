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
    if request.method == 'POST':
        participants = int(request.POST['participants'])
        return render(request, 'tournament/create_tournament.html', {'participants': participants})
    else:
        form = TournamentForm
    return render(request, 'tournament/set_tournament.html', {'form': form})

