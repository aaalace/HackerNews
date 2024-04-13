from django.urls import path
from .views import *

urlpatterns = [
    path("", GetLastPostsView.as_view()),
    path("<post_id>", OpenPostByIdView.as_view())
]
