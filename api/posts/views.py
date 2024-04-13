from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Post
from .serializers import PostSerializer


class GetLastPostsView(APIView):
    permission_classes = (AllowAny,)

    @staticmethod
    def get(request):
        try:
            posts = Post.objects.order_by("-date")[:100]
            serialized_posts = PostSerializer(posts, many=True)

            return Response(serialized_posts.data)
        except Exception as e:
            print(e)
            return Response({"error": "Sorry, something went wrong"},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class OpenPostByIdView(APIView):
    permission_classes = (AllowAny,)

    @staticmethod
    def get(request, post_id):
        try:
            post = Post.objects.filter(id=post_id).first()
            if post is None:
                return Response({"error": "post do not exists"},
                                status=status.HTTP_404_NOT_FOUND)

            serialized_post = PostSerializer(post, many=False)

            return Response(serialized_post.data,
                            status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({"error": "Sorry, something went wrong"},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)
