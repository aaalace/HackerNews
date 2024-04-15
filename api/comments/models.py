from django.db import models
from posts.models import Post


class Comment(models.Model):
    author = models.CharField(max_length=80, default="anonymous")
    content = models.TextField()
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comment")
    parent = models.ForeignKey(to="self", on_delete=models.PROTECT,
                               blank=True, null=True, default=None, related_name="replies")

    def __str__(self):
        return str(self.id)
