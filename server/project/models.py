from enum import unique
from authentication.models import *


class Project(models.Model):
    owner = models.ForeignKey(ProjectOwner, on_delete=models.CASCADE)
    # developer = models.ForeignKey(Developer, on_delete=models.CASCADE)
    # coardinator = models.ForeignKey(Coordinator, on_delete=models.CASCADE)
    # reviewer = models.ForeignKey(Reviewer, on_delete=models.CASCADE)
    # manager = models.ForeignKey(Manager, on_delete=models.CASCADE)
    title = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    expected_deliverables = models.TextField()
    technologies_to_used = models.TextField()
    is_completed = models.BooleanField(default=False)
    is_public = models.BooleanField(default=True)
    file = models.FileField(blank=True, null=True)

    def __str__(self):
        return self.title


class Opportunities(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    file = models.FileField(blank=True, null=True)
    is_public = models.BooleanField(default=True)

    def __str__(self):
        return self.title
