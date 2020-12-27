from django.db import models
from django.contrib.gis.db import models as geo_models


class Files(models.Model):
    image = models.ImageField()


class UserProfile(models.Model):
    user = models.OneToOneField('auth.user', models.CASCADE)


#
# class Location(models.Model):
#     location = geo_models.PointField(null=True)


# class Posts(models.Model):
#     class Meta:
#         db_table = 'posts'
#
#     person_location = geo_models.PointField()
#     description = models.TextField()
#     photo = models.URLField()
#     post_user = models.ForeignKey('auth.user', on_delete=models.CASCADE)
