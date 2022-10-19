from rest_framework import serializers

from project.models import Project


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ['proj_name', 'proj_desc', 'proj_url', 'proj_file', 'proj_manager',
                  'proj_implementor', 'proj_coordinator', 'proj_comments', 'proj_status', 'proj_type']

    # validate the data
    def validate(self, attrs):
        proj_owner = attrs.get('proj_owner', '')
        proj_name = attrs.get('proj_name', '')
        proj_desc = attrs.get('proj_desc', '')
        proj_url = attrs.get('proj_url', '')
        proj_file = attrs.get('proj_file', '')
        proj_manager = attrs.get('proj_manager', '')
        proj_implementor = attrs.get('proj_implementor', '')
        proj_coordinator = attrs.get('proj_coordinator', '')
        proj_comments = attrs.get('proj_comments', '')
        proj_status = attrs.get('proj_status', '')
        proj_type = attrs.get('proj_type', '')

        if not proj_name.isalnum():
            raise serializers.ValidationError(
                'The project name should only contain alphanumeric characters')
        # if not proj_desc.isalnum():
        if not proj_desc:
            raise serializers.ValidationError(
                'The project description should only contain alphanumeric characters')
        return attrs

    # create the project
    def create(self, validated_data):
        return Project.objects.create(**validated_data)
