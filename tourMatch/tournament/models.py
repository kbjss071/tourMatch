from django.db import models
from django.contrib.auth.models import User
import json

# Create your models here.
class Tournament (models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tournament_name = models.CharField(max_length=100)
    participants = models.DecimalField(max_digits=2, decimal_places=0)
    result = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def set_result(self, result):
        self.result = json.dumps(result)

    def get_result(self):
        return json.loads(self.result)