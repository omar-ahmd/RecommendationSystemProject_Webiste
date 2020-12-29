from django.contrib import admin
from .models import Movie, Users, UserMovieRating

admin.site.register(Movie)
admin.site.register(Users)
admin.site.register(UserMovieRating)
