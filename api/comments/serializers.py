from rest_framework import serializers
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    replies_count = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = ["id", "author", "content", "replies_count"]

    def get_replies_count(self, obj):
        return obj.replies.count()
