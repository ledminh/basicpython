# Generated by Django 3.1.3 on 2020-11-24 05:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tutorial', '0005_tutorialindexpage_discord_link'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tutorialindexpage',
            old_name='discord_link',
            new_name='discordLink',
        ),
    ]
