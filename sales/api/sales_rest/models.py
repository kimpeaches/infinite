from django.db import models
from django.urls import reverse

# Create your models here.
class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, unique=True)
    sold = models.BooleanField(default=False)

    def __str__(self):
        return self.vin

class Salesperson(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.employee_id

    def get_api_url(self):
        return reverse("api_show_salesperson", kwargs={"pk": self.pk})


class Customer(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=50)

    def __str__(self):
        return f"Customer: {self.first_name} {self.last_name}"

    def get_api_url(self):
        return reverse("api_show_customer", kwargs={"pk": self.pk})


class Sale(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobile",
        on_delete=models.CASCADE
    )

    salesperson = models.ForeignKey(
        Salesperson,
        related_name = "salesperson",
        on_delete=models.CASCADE
    )

    customer = models.ForeignKey (
        Customer,
        related_name="customer",
        on_delete=models.CASCADE
    )

    price =models.PositiveIntegerField()

    def get_api_url(self):
        return reverse("api_show_sale", kwargs={"pk": self.pk})
