from django.db import models
from posts.models import Post


class Comment(models.Model):
    author = models.CharField(max_length=80, default="Anonymous")
    content = models.TextField()
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    parent = models.ForeignKey(to="self", on_delete=models.CASCADE,
                               blank=True, null=True, default=None)

    def __str__(self):
        return str(self.id)
