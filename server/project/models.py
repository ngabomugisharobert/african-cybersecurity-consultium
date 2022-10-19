from email.policy import default
from django.db import models
from helpers.models import TrackingModel
from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager, PermissionsMixin)

# Create your models here.


class Project(TrackingModel):
    proj_owner = models.CharField(max_length=200, default='')
    proj_name = models.CharField(max_length=100)
    proj_desc = models.TextField()
    proj_file = models.ImageField(upload_to='projects/')
    proj_url = models.URLField(max_length=200)
    proj_date = models.DateTimeField(auto_now_add=True)
    proj_type = models.CharField(max_length=100)
    proj_manager = models.ForeignKey(
        'authentication.User', on_delete=models.CASCADE, default=None, null=True, blank=True, related_name='project_manager')
    proj_implementor = models.ForeignKey(
        'authentication.User', on_delete=models.CASCADE, default=None, null=True, blank=True, related_name='implementor')
    proj_coordinator = models.ForeignKey(
        'authentication.User', on_delete=models.CASCADE, default=None, null=True, blank=True, related_name='coordinator')
    #proj_comments which can be null and blank
    proj_comments = models.TextField(null=True, blank=True)
    proj_status = models.CharField(max_length=100)

    REQUIRED_FIELDS = ['username', 'first_name', 'last_name', 'role']

    def __str__(self):
        return self.name
