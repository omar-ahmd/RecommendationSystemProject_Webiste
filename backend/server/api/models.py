from django.db import models


class Movie(models.Model):
    id = models.AutoField(primary_key=True)
    imdbid = models.CharField(max_length=1024)
    title = models.CharField(max_length=265)
    overview = models.TextField()
    genres = models.CharField(max_length=265, default='')
    realeasedate = models.CharField(max_length=128, default='')
    runningtime = models.PositiveSmallIntegerField()
    language = models.CharField(max_length=128, default='')
    image = models.CharField(max_length=128, default='')


class Users(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=128)
    email = models.CharField(max_length=256)
    password = models.CharField(max_length=256)


class UserMovieRating(models.Model):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    movie_id = models.CharField(max_length=128)
    rating = models.PositiveSmallIntegerField()


# class Hop(models.Model):
#     migration = models.ForeignKey('Migration')
#     host = models.ForeignKey(User, related_name='host_set')

#     class Meta:
#         unique_together = (("migration", "host"),)
