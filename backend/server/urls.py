from server.api import views
from rest_framework import routers
from django.urls import include, path
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]

router = routers.DefaultRouter()
router.register(r'movies', views.MovieViewSet)
router.register(r'users', views.UsersViewSet)
router.register(r'rating', views.UserMovieRatingViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
