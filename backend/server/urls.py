from server.api import views
from rest_framework import routers
from django.urls import include, path
from django.contrib import admin
from django.urls import path

router = routers.DefaultRouter()
router.register(r'movies', views.MovieViewSet)
router.register(r'users', views.UsersViewSet)
router.register(r'rating', views.UserMovieRatingViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/recommendation/', views.RecommendationsMovie,
         name="recommendation"),
    path('api/genre/', views.RecommendationsMovieByGenre,
         name="genre"),
    path('api/year/', views.RecommendationsMovieByYear,
         name="year"),
    path('api/rating/', views.RecommendationsMovieByRating,
         name="rating"),
    path('api/vote/', views.RecommendationsMovieByVote,
         name="vote"),
    path('api/popularity/', views.RecommendationsMovieByPopularity,
         name="popularity"),
]
