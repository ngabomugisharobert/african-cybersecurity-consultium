from project import views
from django.urls import path

urlpatterns = [
    path('', views.GetAllProjects.as_view(), name='All projects'),
    path('getOne', views.GetOneProject.as_view(), name='One Project'),
    path('create', views.CreateProjectView.as_view(), name='Create Project'),

]
