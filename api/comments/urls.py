from django .urls import path
from .views import *

urlpatterns = [
    path("<post_id>", GetPostRootCommentsView.as_view()),
    path("<post_id>/count", GetPostCommentsCountView.as_view()),
    path("<post_id>/<root_id>", GetRootChildCommentsView.as_view())
]
