from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Movie, Users, UserMovieRating


class MovieSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Movie
        fields = ['id', 'imdbid', 'title',
                  'overview', 'genres', 'realeasedate', 'runningtime', 'language']


class UsersSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = ['id', 'first_name', 'last_name', 'email', 'password']


class UserMovieRatingSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserMovieRating
        fields = ['user_id', 'movie_id', 'rating']
