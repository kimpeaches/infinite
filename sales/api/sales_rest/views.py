from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from .models import AutomobileVO, Salesperson, Customer, Sale
import json
from django.http import JsonResponse
# Create your views here.


class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["import_href", "vin", "sold"]

class SalespersonListEncoder(ModelEncoder):
    model = Salesperson
    properties = ["first_name", "last_name", "employee_id"]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = ["first_name", "last_name", "address", "phone_number"]

class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = ["automobile", "salesperson", "customer", "price", "id", "customer"]
    encoders = {
        "automobile": AutomobileVODetailEncoder(),
        "salesperson": SalespersonListEncoder(),
        "customer": CustomerListEncoder(),
    }



@require_http_methods(["GET", "POST", "DELETE"])
def api_list_salespeople(request):
    if request.method == "GET":
        try:
            salesperson = Salesperson.objects.all()
            return JsonResponse(
                {"salesperson": salesperson},
                encoder=SalespersonListEncoder,
            )
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    else:
        content = json.loads(request.body)
        salesperson = Salesperson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalespersonListEncoder,
            safe=False,
        )

@require_http_methods(["GET", "DELETE"])
def api_show_salesperson(request, pk):
    if request.method == "GET":
        try:
            salesperson = Salesperson.objects.get(id=pk)
            return JsonResponse(
                {"salesperson": salesperson},
                encoder = SalespersonListEncoder,
                safe = False,
            )
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    else:
        count, _ = Salesperson.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        try:
            customer = Customer.objects.all()
            return JsonResponse(
                {"customer": customer},
                encoder=CustomerListEncoder,
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerListEncoder,
            safe=False,
        )

@require_http_methods(["GET", "DELETE"])
def api_show_customer(request, pk):
    if request.method == "GET":
        try:
            customer = Customer.objects.get(id=pk)
            return JsonResponse(
                {"customer": customer},
                encoder = CustomerListEncoder,
                safe = False,
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    else:
        count, _ = Customer.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})

@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
            sale = Sale.objects.all()
            return JsonResponse(
                {"sale": sale},
                encoder=SaleListEncoder,
                safe=False,
        )

    else:
        content = json.loads(request.body)
        salesperson = content["salesperson"]
        automobile = content["automobile"]
        customer = content["customer"]

        try:
            content["salesperson"]= Salesperson.objects.get(employee_id=content.get("salesperson"))
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Agent does not exist"},
                status = 400
            )
        try:
            content["automobile"] = AutomobileVO.objects.get(vin=content.get("automobile"))
        except AutomobileVO.DoesNotExist:
                return JsonResponse(
                    {"message": "Automobile does not exist"},
                    status = 400
                )
        try:
            content["customer"] = Customer.objects.get(id=content.get("customer"))
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer does not exist"},
                status = 400
            )
        sale = Sale.objects.create(**content)
        AutomobileVO.objects.filter(vin=automobile).update(sold=False)
        return JsonResponse(
            sale,
            encoder=SaleListEncoder,
            safe=False,)



@require_http_methods(["GET", "DELETE"])
def api_show_sale(request, pk):
    if request.method == "GET":
        try:
            sale = Sale.objects.get(id=pk)
            return JsonResponse(
                {"sale": sale},
                encoder = SaleListEncoder,
                safe = False,
            )
        except Sale.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    else:
        count, _ = Sale.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
