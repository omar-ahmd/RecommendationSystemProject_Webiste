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
        extra_kwargs = {'password': {'write_only': True}}
        fields = ['id', 'username', 'email', 'password']

    # def create(self, validated_data):
    #     """Create and return a new user."""

    #     user = models.User(
    #         email=validated_data['first_name'],
    #         firstname=validated_data['last_name'],
    #         lastname=validated_data['email']
    #     )
    #     user.set_password(validated_data['password'])
    #     user.save()
    #     return user


class UserMovieRatingSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserMovieRating
        fields = ['user_id', 'movie_id', 'rating']
