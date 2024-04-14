from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Comment
from posts.models import Post
from .serializers import CommentSerializer


class GetPostRootCommentsView(APIView):
    permission_classes = (AllowAny,)

    @staticmethod
    def get(request, post_id):
        try:
            post = Post.objects.filter(id=post_id).first()
            if post is None:
                return Response({"error": "post do not exists"},
                                status=status.HTTP_404_NOT_FOUND)

            root_comments = Comment.objects.filter(post_id=post_id, parent_id=None)
            serialized_comments = CommentSerializer(root_comments, many=True)

            return Response(serialized_comments.data,
                            status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({"error": "Sorry, something went wrong"},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class GetRootChildCommentsView(APIView):
    permission_classes = (AllowAny,)

    @staticmethod
    def get(request, post_id, root_id):
        try:
            post = Post.objects.filter(id=post_id).first()
            if post is None:
                return Response({"error": "post do not exists"},
                                status=status.HTTP_404_NOT_FOUND)

            root = Comment.objects.filter(id=root_id).first()
            if root is None:
                return Response({"error": "root comment do not exists"},
                                status=status.HTTP_404_NOT_FOUND)

            child_comments = Comment.objects.filter(post_id=post_id, parent_id=root_id)
            serialized_comments = CommentSerializer(child_comments, many=True)

            return Response(serialized_comments.data,
                            status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({"error": "Sorry, something went wrong"},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class GetPostCommentsCountView(APIView):
    permission_classes = (AllowAny,)

    @staticmethod
    def get(request, post_id):
        try:
            post = Post.objects.filter(id=post_id).first()
            if post is None:
                return Response({"error": "post do not exists"},
                                status=status.HTTP_404_NOT_FOUND)

            count = 0
            root_comments = Comment.objects.filter(post_id=post_id, parent_id=None)
            count += root_comments.count()
            for comment in root_comments:
                child_comments = Comment.objects.filter(post_id=post_id, parent_id=comment.id)
                count += child_comments.count()

            return Response(count,
                            status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({"error": "Sorry, something went wrong"},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)