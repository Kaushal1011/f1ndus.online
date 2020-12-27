from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import UserProfile
# from .models import Posts
from rest_framework.authentication import BaseAuthentication
from django.db import connections, connection


class UserCrud(APIView):
    @staticmethod
    def post(request):
        try:
            username = request.data.get('username')
            password = request.data.get('password')
            user = User.objects.create(username=username, password=password)
            UserProfile.objects.create(user=user)
            return Response("Done", status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)




class ImagePost(APIView):
    @staticmethod
    def post(request):
        request.data.get('image')
class Post(APIView):
    @staticmethod
    def post(request):
        long = request.data.get('long')
        lat = request.data.get('lat')
        description_ = request.data.get('description')
        username=request.data.get('username')
        print('''INSERT
                    INTO
                    posts(person_location,description,post_user)
                    VALUES
                    (ST_SetSRID(ST_MakePoint({},{}), 4326),'{}', '{}');'''.format(long, lat, description_, username))
        try:
            with connection.cursor() as cursor:
                cursor.execute('''INSERT
            INTO
            posts(person_location,description,post_user)
            VALUES
            (ST_SetSRID(ST_MakePoint({},{}), 4326),'{}', '{}');'''.format(long,lat,description_,username))

                return Response("hogaya",status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e),status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class FindPost(APIView):
    @staticmethod
    def post(request):
        long = request.data.get('long')
        lat = request.data.get('lat')
        try:
            with connection.cursor() as cursor:
                cursor.execute('''SELECT ST_X (ST_Transform (person_location, 4326)) AS long,
                ST_Y (ST_Transform (person_location, 4326)) AS lat,
                post_user,description,photo from posts WHERE ST_Contains(
                st_geomfromtext('SRID=4326;POLYGON(({} {},{} {},{} {}, {} {}))')
                ,person_location)'''.format(long-0.5, lat-0.5, long, lat+0.5, long+0.5, lat-0.5,long-0.5, lat-0.5))
                row = cursor.fetchall()
                return Response(row,status=status.HTTP_200_OK)

        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


