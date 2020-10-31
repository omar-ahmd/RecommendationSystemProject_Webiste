from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Movie


class MovieSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Movie
        fields = ['id', 'imdbid', 'title', 'overview']
