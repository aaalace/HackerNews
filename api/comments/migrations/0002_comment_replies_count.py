# Generated by Django 4.0.4 on 2024-04-15 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='replies_count',
            field=models.IntegerField(default=0),
        ),
    ]
