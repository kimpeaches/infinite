from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)


class Technician(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=100, unique=True)

    def get_api_url(self):
        return reverse("api_list_technicians", kwargs={"pk": self.pk})


class Appointment(models.Model):
    date_time = models.DateTimeField(null=True)
    reason = models.CharField(max_length=200)
    status = models.CharField(max_length=100, default=False, null=True)
    customer = models.CharField(max_length=100)
    vin = models.CharField(max_length=17, unique=True)

    technician = models.ForeignKey(
        Technician,
        related_name="appointment",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.vin

    def get_api_url(self):
        return reverse("show_appointment",kwargs={"pk": self.pk})
