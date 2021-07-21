# Generated by Django 3.2.5 on 2021-07-13 09:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('price', models.FloatField()),
                ('discount_price', models.FloatField()),
                ('category', models.CharField(max_length=250)),
                ('description', models.TextField()),
                ('image', models.CharField(max_length=550)),
            ],
        ),
    ]
