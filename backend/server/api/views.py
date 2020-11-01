from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MovieSerializer, UsersSerializer, UserMovieRatingSerializer
from .models import Movie, Users, UserMovieRating
from django.http import JsonResponse
from .recommendation import getRecommendations
from .responses_1 import getBygenres, getByyear, getByrating
from django.views.decorators.csrf import csrf_exempt
import json
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


@csrf_exempt
@api_view(['GET', 'POST'])
def RecommendationsMovie(request):
    body_unicode = request.body.decode('utf-8')
    body_data = json.loads(body_unicode)
    title = body_data['title']
    res = getRecommendations(title)
    return JsonResponse({'Recommendations': res})


@csrf_exempt
@api_view(['GET', 'POST'])
def RecommendationsMovieByGenre(request):
    body_unicode = request.body.decode('utf-8')
    body_data = json.loads(body_unicode)
    genre = body_data['genre']
    res = getBygenres(genre)
    return JsonResponse({'Movies': res})


@csrf_exempt
@api_view(['GET', 'POST'])
def RecommendationsMovieByYear(request):
    body_unicode = request.body.decode('utf-8')
    body_data = json.loads(body_unicode)
    year = body_data['year']
    res = getByyear(year)
    return JsonResponse({'Movies': res})


@csrf_exempt
@api_view(['GET', 'POST'])
def RecommendationsMovieByRating(request):
    body_unicode = request.body.decode('utf-8')
    body_data = json.loads(body_unicode)
    rating = body_data['rating']
    res = getByrating(rating)
    return JsonResponse({'Movies': res})
