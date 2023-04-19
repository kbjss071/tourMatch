from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required
def tournament_detail (request):
    return 

@login_required
def tournamnet_list(request):
    return


def create_tournament(request):    
    return render(request, 'tournament/create_tournament.html')