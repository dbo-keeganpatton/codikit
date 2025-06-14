from rest_framework import serializers
from .models import * 


class StoryModelSerializer(serializers.ModelSerializer):
    class Meta:
        model=StoryModel
        fields = '__all__'


class GenreModelSerializer(serializers.ModelSerializer):
    class Meta:
        model=Genre
        fields = '__all__'


class RequestModelSerializer(serializers.ModelSerializer):
    class Meta:
        model=Request
        fields = '__all__'


class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields = '__all__'


class VersionModelSerializer(serializers.ModelSerializer):
    class Meta:
        model=Version
        fields = '__all__'




