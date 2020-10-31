from rest_framework import viewsets
from .serializers import MovieSerializer
from .models import Movie
#from rest_framework import permissions


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
#    permission_classes = [permissions.IsAuthenticated]
