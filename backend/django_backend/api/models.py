from django.db import models

class storyModel(models.Model):
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


class genre(models.Model):
    genre = models.CharField()
    genre_uuid = models.CharField()


class request(models.Model):
    request_id = models.CharField()
    story_id = models.CharField()
    legacy_id = models.CharField()
    user_uuid = models.CharField()


class user(models.Model):
    name = models.CharField()
    password = models.CharField()
    user_uuid = models.CharField()


class version(models.Model):
    legacy_id = models.CharField()
    story_id = models.CharField()
    body = models.TextField()
    user_uuid = models.CharField()


