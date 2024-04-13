from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Post(models.Model):
    name = models.CharField(max_length=80)
    rating = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(100)])
    author = models.CharField(max_length=80)
    date = models.DateTimeField()
    link = models.URLField(default="URLField")

    def __str__(self):
        return self.name
