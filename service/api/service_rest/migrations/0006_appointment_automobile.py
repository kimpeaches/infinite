# Generated by Django 4.0.3 on 2023-10-24 19:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0005_appointment_date_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='automobile',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='appointments', to='service_rest.automobilevo'),
        ),
    ]
