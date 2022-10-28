from rest_framework.serializers import ModelSerializer
from .models import Project,Opportunities


class ProjectSerializer(ModelSerializer):

    class Meta:
        model = Project
        fields = ['title', 'description',
                  'expected_deliverables', 'technologies_to_used', 'is_completed','is_public','owner']
        read_only_fields = ['owner']


class OpportunitySerializer(ModelSerializer):
    
    class Meta:
        model=Opportunities
        fields=['title','description','is_public']