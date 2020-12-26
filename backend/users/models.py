from django.contrib.auth.models import User
from django.db import models


class UserProfile(models.Model):
    user = models.OneToOneField('auth.user', models.CASCADE)


class Posts(models.Model):
    location = models.PointField()
    description = models.TextField()
    photo = models.ImageField()
    user= models.ForeignKey(User, on_delete=models.CASCADE)

# Create your models here.
