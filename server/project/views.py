from django.shortcuts import render
from rest_framework import response, status, permissions
from rest_framework.generics import GenericAPIView, CreateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from project.serializers import ProjectSerializer

# Create your views here.


class CreateProjectView(CreateAPIView):
    serializer_class = ProjectSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        project = request.data
        serializer = self.serializer_class(data=project)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetAllProjects(ListAPIView):
    serializer_class = ProjectSerializer

    def get(self, request):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return response(serializer.data)


class GetOneProject(GenericAPIView):
    authentication_classes = []
    serializer_class = ProjectSerializer

    def get(self, request, pk):
        project = Project.objects.get(proj_name=pk)
        serializer = ProjectSerializer(project, many=False)
        return response(serializer.data)
