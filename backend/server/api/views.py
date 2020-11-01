from rest_framework import viewsets
from .serializers import MovieSerializer, UsersSerializer, UserMovieRatingSerializer
from .models import Movie, Users, UserMovieRating
#from rest_framework import permissions


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
#    permission_classes = [permissions.IsAuthenticated]


class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer


class UserMovieRatingViewSet(viewsets.ModelViewSet):
    queryset = UserMovieRating.objects.all()
    serializer_class = UserMovieRatingSerializer
