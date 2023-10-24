from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
from .models import Technician, AutomobileVO, Appointment
from django.http import JsonResponse
import json


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
        "vin",
        "sold",
    ]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id",
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "date_time",
        "reason",
        "status",
        "customer",
        "vin",
        "id",
        "technician",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }


@require_http_methods(["GET","POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technician = Technician.objects.all()
        return JsonResponse(
            {"technician":technician},
            encoder = TechnicianEncoder
        )
    elif request.method == "POST":
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )
    else:
        return JsonResponse({"message": "Nah"}, status=405)
@require_http_methods(["GET","DELETE"])
def show_technician(request,pk):
    if request.method == "GET":
        technician = Technician.objects.get(id=pk)
        return JsonResponse(
            {"technician": technician},
            encoder=TechnicianEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = Technician.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        return JsonResponse({"message": "Nah"}, status=405)



@require_http_methods(["GET","POST"])
def api_list_appointments(request):
    if(request.method == "GET"):
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
            safe=False
            )

    else:
        content = json.loads(request.body)
        try:
            employee_id = content["technician"]
            technician = Technician.objects.get(employee_id=employee_id)
            content["technician"] = technician

        except Technician.DoesNotExist:
            return JsonResponse({"message": "Invalid Appointment"}, status=400)

        appointment = Appointment.objects.create(**content)

        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False)



@require_http_methods(["GET","DELETE"])
def show_appointments(request, pk):
    if request.method == "GET":
        apppoinment = Appointment.objects.get(id=pk)
        return JsonResponse(
            {"apppoinment": apppoinment},
            encoder=AppointmentEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        return JsonResponse({"message": "Nah"}, status=405)
