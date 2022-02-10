from django.db import models

# Create your models here.

class Amigo(models.Model):
    nome = models.CharField(max_length = 300)
    idade = models.IntegerField(default = 0)
    telefone = models.IntegerField(default = 0) 
    documento = models.IntegerField(default = 0)

    def __str__(self):
        return self.nome