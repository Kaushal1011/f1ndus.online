from django.contrib.auth.models import User
from rest_framework.views import APIView
from .models import UserProfile
from .models import Posts
from rest_framework.authentication import BaseAuthentication

class UserCrud(APIView):
    @staticmethod
    def post(request):
        username = request.body.get('username')
        password = request.body.get('password')
        user = User.objects.create(username=username, password=password)
        UserProfile.objects.create(user=user)


class NewPost(APIView):
    authentication_classes = BaseAuthentication
    @staticmethod
    def post(request):
        Posts.objects.create(username=request.body.get('username'),description=request.body.get('description'),user=request.user)
