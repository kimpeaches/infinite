# Generated by Django 4.0.3 on 2023-10-24 17:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0002_alter_technician_employee_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='vip',
            field=models.BooleanField(default=False, null=True),
        ),
    ]
