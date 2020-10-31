from django.db import models


class Movie(models.Model):
    id = models.CharField(max_length=128, primary_key=True)
    imdbid = models.CharField(max_length=1024)
    title = models.CharField(max_length=265)
    overview = models.TextField()
