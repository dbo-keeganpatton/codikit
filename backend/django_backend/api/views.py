from rest_framework import viewsets
from .models import *
from .serializers import *


class StoryModelViewSet(viewsets.ModelViewSet):
    queryset=StoryModel.objects.all()
    serializer_class=StoryModelSerializer




class GenreModelViewSet(viewsets.ModelViewSet):
    queryset=Genre.objects.all()
    serializer_class=GenreModelSerializer



class RequestModelViewSet(viewsets.ModelViewSet):
    queryset=Request.objects.all()
    serializer_class=RequestModelSerializer




class UserModelViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class=UserModelSerializer




class VersionModelViewSet(viewsets.ModelViewSet):
    queryset=Version.objects.all()
    serializer_class=VersionModelSerializer






