# Generated by Django 4.0.3 on 2023-10-24 19:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0006_appointment_automobile'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='automobile',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='vip',
        ),
    ]