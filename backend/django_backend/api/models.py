from django.db import models

class StoryModel(models.Model):
    storyTitle = models.TextField()
    authorList = models.JSONField()
    storySummary = models.TextField()
    storySubjects = models.TextField()
    storyGenres = models.JSONField()
    storyLanguages = models.TextField()
    textHtmlLink = models.TextField()
    epubLink = models.TextField()
    imageLink = models.TextField()
    textLink = models.TextField()


class Genre(models.Model):
    genre = models.CharField()
    genre_uuid = models.CharField()


class Request(models.Model):
    request_id = models.CharField()
    story_id = models.CharField()
    legacy_id = models.CharField()
    user_uuid = models.CharField()


class User(models.Model):
    name = models.CharField()
    password = models.CharField()
    user_uuid = models.CharField()


class Version(models.Model):
    legacy_id = models.CharField()
    story_id = models.CharField()
    body = models.TextField()
    user_uuid = models.CharField()


