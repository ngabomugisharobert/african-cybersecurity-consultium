from django.shortcuts import render
from django.http import HttpResponse
from authentication.models import Coordinator, ProjectOwner
from .serializers import ProjectSerializer
from .models import ClientProject
from rest_framework import response, status, permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import CreateAPIView, ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser


class RecordProjectApiView(CreateAPIView):

    serializer_class = ProjectSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        project_owner2 = ProjectOwner.objects.get(
            project_owner=self.request.user.id)
        if project_owner2:
            if serializer.is_valid():
                serializer.save(project_owner=project_owner2)
                return response.Response({"project": "Project recorded successfully"}, status=status.HTTP_201_CREATED)
            return response.Response({"error": "Wrong inputs"}, status=status.HTTP_400_BAD_REQUEST)
        return response.Response({"error": "User role should be a project owner"}, status=status.HTTP_400_BAD_REQUEST)


# View to list all public pending projects


class Public_Pending_ProjectListApiView(ListAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        return ClientProject.objects.filter(is_completed=False).filter(is_public=True)

# View to list all private pending projects


class Private_Pending_ProjectListApiView(ListAPIView):
    serializer_class = ProjectSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return ClientProject.objects.filter(is_completed=False).filter(is_public=False)


# View to list all public completed projects
class Public_Completed_ProjectListApiView(ListAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        return ClientProject.objects.filter(is_completed=True).filter(is_public=True)

# View to list all private completed projects


class Private_Completed_ProjectListApiView(ListAPIView):
    serializer_class = ProjectSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return ClientProject.objects.filter(is_completed=True).filter(is_public=False)


# View to List all the public pending projects for the current login projectOwner
class ProjectOwnerPublicPendingProjectsApiView(ListAPIView):

    serializer_class = ProjectSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user.id
        project_owner = ProjectOwner.objects.get(project_owner=user)

        return ClientProject.objects.filter(owner=project_owner).filter(is_completed=False).filter(is_public=True)


# View to List all the public completed projects for the current login projectOwner
class ProjectOwnerPublicCompletedProjectsApiView(ListAPIView):

    serializer_class = ProjectSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user.id
        project_owner = ProjectOwner.objects.get(project_owner=user)

        return ClientProject.objects.filter(owner=project_owner).filter(is_completed=True).filter(is_public=True)


# View to List all the private pending projects for the current login projectOwner

class ProjectOwnerPrivatePendingProjectsApiView(ListAPIView):

    serializer_class = ProjectSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user.id
        project_owner = ProjectOwner.objects.get(project_owner=user)

        return ClientProject.objects.filter(owner=project_owner).filter(is_completed=False).filter(is_public=False)


# View to List all the private completed projects for the current login projectOwner

class ProjectOwnerPrivateCompletedProjectsApiView(ListAPIView):

    serializer_class = ProjectSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user.id
        project_owner = ProjectOwner.objects.get(project_owner=user)

        return ClientProject.objects.filter(owner=project_owner).filter(is_completed=True).filter(is_public=False)


# View to List all the private  projects for the current login projectOwner

class ProjectOwnerPrivateProjectsApiView(ListAPIView):

    serializer_class = ProjectSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user.id
        project_owner = ProjectOwner.objects.get(project_owner=user)

        return ClientProject.objects.filter(owner=project_owner).filter(is_public=False)

# View to List all the public projects for the current login projectOwner


class ProjectOwnerPublicProjectsApiView(ListAPIView):

    serializer_class = ProjectSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user.id
        project_owner = ProjectOwner.objects.get(project_owner=user)

        return ClientProject.objects.filter(owner=project_owner).filter(is_public=True)


# View to List all the completed projects for the current login projectOwner

class ProjectOwnerCompletedProjectsApiView(ListAPIView):

    serializer_class = ProjectSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user.id
        project_owner = ProjectOwner.objects.get(project_owner=user)

        return ClientProject.objects.filter(owner=project_owner).filter(is_completed=True)


# View to List all the pending projects for the current login projectOwner

class ProjectOwnerPendingProjectsApiView(ListAPIView):

    serializer_class = ProjectSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user.id
        project_owner = ProjectOwner.objects.get(project_owner=user)

        return ClientProject.objects.filter(owner=project_owner).filter(is_completed=False)

# View to List the project detail


class ProjectDetailApiView(RetrieveUpdateDestroyAPIView):

    serializer_class = ProjectSerializer
    # permission_classes = (IsAuthenticated,)

    def get_object(self):
        """
        Returns the object the view is displaying.

        You may want to override this if you need to provide non-standard
        queryset lookups.  Eg if objects are referenced using multiple
        keyword arguments in the url conf.
        """
        queryset = self.filter_queryset(self.get_queryset())

        # Perform the lookup filtering.
        lookup_url_kwarg = self.lookup_url_kwarg or self.lookup_field

        assert lookup_url_kwarg in self.kwargs, (
            'Expected view %s to be called with a URL keyword argument '
            'named "%s". Fix your URL conf, or set the `.lookup_field` '
            'attribute on the view correctly.' %
            (self.__class__.__name__, lookup_url_kwarg)
        )

        filter_kwargs = {self.lookup_field: self.kwargs[lookup_url_kwarg]}
        obj = get_object_or_404(queryset, **filter_kwargs)

        # May raise a permission denied
        self.check_object_permissions(self.request, obj)

        return obj
