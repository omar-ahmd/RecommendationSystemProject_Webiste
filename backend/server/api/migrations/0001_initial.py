# Generated by Django 3.1.2 on 2020-10-30 21:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.CharField(max_length=265, primary_key=True, serialize=False)),
                ('imdbid', models.CharField(max_length=265)),
                ('title', models.CharField(max_length=265)),
                ('overview', models.CharField(max_length=256)),
            ],
        ),
    ]
