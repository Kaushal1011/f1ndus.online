from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import UserProfile
# from .models import Posts
from rest_framework.authentication import BaseAuthentication
from django.db import connections, connection
from rest_framework.exceptions import AuthenticationFailed
# Dont ever create auth system like this, atleast encrypt password
from .models import Files

from rest_framework.serializers import ModelSerializer


class ImageSerializer(ModelSerializer):
    class Meta:
        model = Files
        fields = ['image']


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


# Extremly Bad Auth mechanism but we are running out of time so :P
# Never retrun primay keys from backend, 2 redbulls later, umm I dont have time this must be done
class UserLogin(APIView):
    @staticmethod
    def post(request):
        username = request.data.get('username')
        password = request.data.get('password')
        try:
            username = request.data.get('username')
            password = request.data.get('password')
            user = User.objects.get(username=username)
            if user.password == password:
                return Response("User Authenticated", status=status.HTTP_200_OK)
            else:
                raise AuthenticationFailed()
        except User.DoesNotExist:
            raise AuthenticationFailed()
        except AuthenticationFailed:
            raise AuthenticationFailed()


class ImagePost(APIView):
    serializer_class = ImageSerializer

    @staticmethod
    def post(request):
        image = request.data['File']
        file = Files.objects.create(image=image)
        return Response(file.image.url)


# Raw sql stuff location based queries because cockroachdb driver doesnt support this
class Post(APIView):
    @staticmethod
    def post(request):
        try:
            username = request.data.get('username')
            password = request.data.get('password')
            user = User.objects.get(username=username)
            if password != user.password:
                raise AuthenticationFailed()
            long = request.data.get('long')
            lat = request.data.get('lat')
            description_ = request.data.get('description')
            username = request.data.get('username')
            activefrom = request.data.get('activefrom')
            activeuntil = request.data.get('activeuntil')
            typeloc = request.data.get('type')
            location_name = request.data.get('location_name')
            image = request.data.get("image")

            with connection.cursor() as cursor:
                cursor.execute('''INSERT
            INTO
            posts(person_location,location_name,description,post_user,activefrom,activeuntil,type,photo)
            VALUES
            (ST_SetSRID(ST_MakePoint({},{}), 4326),'{}', '{}','{}',{},{},'{}','{}');'''.format(long, lat, location_name, description_, username, activefrom, activeuntil, typeloc, image))

                return Response("hogaya", status=status.HTTP_200_OK)
        except AuthenticationFailed:
            raise AuthenticationFailed()
        except User.DoesNotExist:
            raise AuthenticationFailed()
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class FindPost(APIView):
    @staticmethod
    def post(request):
        long = request.data.get('long')
        lat = request.data.get('lat')
        activeuntil = request.data.get('activeuntil')
        try:
            with connection.cursor() as cursor:
                cursor.execute('''SELECT ST_X (ST_Transform (person_location, 4326)) AS long,
                ST_Y (ST_Transform (person_location, 4326)) AS lat,
                * from posts WHERE ST_Contains(
                st_geomfromtext('SRID=4326;POLYGON(({} {},{} {},{} {}, {} {}))')
                ,person_location) and activeuntil > {}'''.format(long-0.5, lat-0.5, long, lat+0.5, long+0.5, lat-0.5, long-0.5, lat-0.5, activeuntil))
                row = cursor.fetchall()
                return Response(row, status=status.HTTP_200_OK)

        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)
