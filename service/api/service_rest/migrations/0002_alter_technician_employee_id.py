# Generated by Django 4.0.3 on 2023-10-24 01:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='technician',
            name='employee_id',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
