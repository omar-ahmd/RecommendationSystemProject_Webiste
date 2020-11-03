from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MovieSerializer, UsersSerializer, UserMovieRatingSerializer
from .models import Movie, Users, UserMovieRating
from django.http import JsonResponse
from .recommendation import getRecommendations
from .responses_1 import getBygenres, getByyear, getByrating, getByVotes, getByPopularity, getById, getBy_genres_year_rating, getBy_search
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


@csrf_exempt
@api_view(['GET', 'POST'])
def AuthUsername(request):
    res = "Login failed"
    if request.method == "POST":
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)
        u = body_data['username']
        p = body_data['password']
        print(u)
        try:
            queryuser = Users.objects.get(username=u)
            if p == str(queryuser.password):
                res = "Logged in"
        except:
            res = "error..."
    return JsonResponse({'Login': res})


class UserMovieRatingViewSet(viewsets.ModelViewSet):
    queryset = UserMovieRating.objects.all()
    serializer_class = UserMovieRatingSerializer

    @csrf_exempt
    @api_view(['GET', 'POST'])
    def GetUserRating(request):
        res = ""
        if request.method == "POST":
            body_unicode = request.body.decode('utf-8')
            body_data = json.loads(body_unicode)
            u = body_data['username']
            p = body_data['password']
            print(u)
            try:
                queryuser = Users.objects.get(username=u)
                if p == str(queryuser.password):
                    res = "Logged in"
            except:
                res = "error..."
        elif request.method == "GET":
            body_unicode = request.body.decode('utf-8')
            body_data = json.loads(body_unicode)
            u = body_data['username']
            p = body_data['password']

        return JsonResponse({'Login': res})


@csrf_exempt
@api_view(['GET', 'POST'])
def RecommendationsMovie(request):
    body_unicode = request.body.decode('utf-8')
    body_data = json.loads(body_unicode)
    id = body_data['id']
    res = getRecommendations(id)
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


@csrf_exempt
@api_view(['GET'])
def RecommendationsMovieByVote(request):
    res = getByVotes()
    return JsonResponse({'Movies': res})


@csrf_exempt
@api_view(['GET'])
def RecommendationsMovieByPopularity(request):
    res = getByPopularity()
    return JsonResponse({'Movies': res})


@csrf_exempt
@api_view(['GET', 'POST'])
def RecommendationsMovieById(request):
    body_unicode = request.body.decode('utf-8')
    body_data = json.loads(body_unicode)
    id = body_data['id']
    res = getById(id)
    return JsonResponse({'Movies': res})


@csrf_exempt
@api_view(['GET'])
def RecommendationsMovieBy_genre_year_rating(request):
    body_unicode = request.body.decode('utf-8')
    body_data = json.loads(body_unicode)
    genre = body_data['genre']
    year = body_data['year']
    rating = body_data['rating']
    res = getBy_genres_year_rating(genre, year, rating)
    return JsonResponse({'Movies': res})


@ csrf_exempt
@ api_view(['GET', 'POST'])
def RecommendationsMovieBy_Search(request):
    body_unicode = request.body.decode('utf-8')
    body_data = json.loads(body_unicode)
    title = body_data['title']
    res = getBy_search(title)
    return JsonResponse({'Movies': res})
