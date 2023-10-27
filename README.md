# CarCar

CarCar is a application that acts as the nerve center for a car dealership. It's the ultimate multitasker, making life at the dealership a whole lot easier that manages inventory, car sales and automotive services.

Team:

* Kim - Sales
* Peter Sayaseng - Service Microservice

# Getting Started

Install Docker and GIT in your computer.

Link for the project: https://gitlab.com/kimpeaches/project-beta

1. Fork and clone this repository using this git command:

git clone <<project-link>>

2. In the project directory, you must be able to run the following commands in your terminal to create, build and start running the containers:

docker volume create beta-data
docker -compose build
docker -compose up

* Make sure all Docker containers are running and then view the project in the browser using this link: http://localhost:3000/

![Backend diagram](./Project-Beta.png)

## Design

-Bootstrap for the tables
-CSS/Inline CSS for the GIF background and zoom in card when hovering.

## Inventory microservice

Inventory Microservice keeps a list of cars that can be purchased. Our sales and service teams use a tool called a poller to regularly check this list, making sure they always know which cars are in our inventory and have the most current information.
There are 3 clasees in models.py (Manufacturer, VehicleModel and Automobile).
Manufacturer has a name field.
VehicleModel has 3 fields(name, picture_url and manufacturer).
Automobile has 5 fields (color, year, vin, sold and model).

User will input the said properties into Insomnia that will be shown in the webpage.
Sales Microservice will run on http://localhost:8100/api/ to complete the following RESTful API request ("GET, POST, DELETE, PUT).


**MANUFACTURERS**


A. Input, URL, and preview in POSTING, GETTING a manufacturer are as follows:

1. URL - http://localhost:8100/api/manufacturers/

2. Input as JSON(For POST request only) -
{
	"name": "Ford"
}

3. Preview -
{
	"href": "/api/manufacturers/8/",
	"id": 8,
	"name": "Ford"
}

B. Input, URL, and preview in UPDATING a manufacturer are as follows:

1. URL - 	http://localhost:8100/api/manufacturers/:id/

2. Input as JSON(For POST request only) -
{
	"name": "Ferrari"
}

3. Preview -
{
	"href": "/api/manufacturers/9/",
	"id": 9,
	"name": "Ferrari"
}

C. Delete a manufacturer using this URL http://localhost:8100/api/manufacturers/:id/


**VEHICLE MODELS**


A. Input, URL, and preview in POSTING, GETTING a vehicle are as follows:

1. URL - 	http://localhost:8100/api/models/

2. Input as JSON(For POST request only) -
{
	"name": "Fairlady Z432",
	"picture_url": "https://media.hagerty.com/media/wp-content/uploads/uscamediasite/images/story-images/2019/01/18/nissan_432_10120190117204148",
	"manufacturer_id": 4
}

3. Preview -

{
	"href": "/api/models/11/",
	"id": 11,
	"name": "Fairlady Z432",
	"picture_url": "https://media.hagerty.com/media/wp-content/uploads/uscamediasite/images/story-images/2019/01/18/nissan_432_10120190117204148",
	"manufacturer": {
		"href": "/api/manufacturers/4/",
		"id": 4,
		"name": "Datsun"
	}
}

B. Input, URL, and preview in UPDATING a vehicle are as follows:

1. URL - 	http://localhost:8100/api/models/:id/

2. Input as JSON(For POST request only) -
{
	"name": "Shelby Cobra"
}

3. Preview -
{
	"href": "/api/models/12/",
	"id": 12,
	"name": "Shelby Cobra",
	"picture_url": "https://assets-global.website-files.com/5b4a3b3971d099f78f362505/648a11f07d9ce40f55d25162_002949900294488NE-3.jpg",
	"manufacturer": {
		"href": "/api/manufacturers/7/",
		"id": 7,
		"name": "Shelby American"
	}
}

C. Delete a vehicle using this URL 	http://localhost:8100/api/models/:id/


**AUTOMOBILES**


A. Input, URL, and preview in POSTING, GETTING an automobile are as follows:

1. URL - 	http://localhost:8100/api/automobiles/

2. Input as JSON(For POST request only) -
{
	"color": "Red",
	"year": 1970,
	"vin": "3FDNF65242MA29515",
	"model_id": 11
}

3. Preview -

{
	"href": "/api/automobiles/3FDNF65242MA29515/",
	"id": 12,
	"color": "Red",
	"year": 1970,
	"vin": "3FDNF65242MA29515",
	"model": {
		"href": "/api/models/11/",
		"id": 11,
		"name": "Fairlady Z432",
		"picture_url": "https://media.hagerty.com/media/wp-content/uploads/uscamediasite/images/story-images/2019/01/18/nissan_432_10120190117204148",
		"manufacturer": {
			"href": "/api/manufacturers/4/",
			"id": 4,
			"name": "Datsun"
		}
	},
	"sold": false
}

B. Input, URL, and preview in UPDATING a vehicle are as follows:

1. URL - 	http://localhost:8100/api/automobiles/:vin/

2. Input as JSON(For POST request only) -
{
	"sold": true
}

3. Preview -
{
	"href": "/api/automobiles/KNDJT2A19B7240639/",
	"id": 4,
	"color": "silver",
	"year": 1977,
	"vin": "KNDJT2A19B7240639",
	"model": {
		"href": "/api/models/4/",
		"id": 4,
		"name": "280Z",
		"picture_url": "https://assets-global.website-files.com/5b4a3b3971d099f78f362505/61f12b2d829c31257952eafb_1977-Datsun-280Z-Coupe-Silver-HLS3041117_064.jpeg",
		"manufacturer": {
			"href": "/api/manufacturers/4/",
			"id": 4,
			"name": "Datsun"
		}
	},
	"sold": true
}

C. Delete an automobile using this URL 	http://localhost:8100/api/automobiles/:vin/



## Service microservice

There are 3 classes in models.py (AutomobileVO, Technician and Appointment).
AutomobileVO is an instance of the class in Inventory API with the equivalent values to get the specific automobile vin through poller.py after polling.
Technician model has 3 fields (first_name, last_name and employee_id).
Appointment model has 7 fields (status_choices, date_time, reason, status, customer and vin).

User will input the said properties into Insomnia that will be shown in the webpage.
Sales Microservice will run on http://localhost:8080/api/ to complete the following RESTful API request ("GET, POST, DELETE, PUT).


**TECHNICIAN**

A. Input, URL, and preview in POSTING, GETTING a technician are as follows:

1. URL - http://localhost:8080/api/technicians/

2. Input as JSON(For POST request only) -
{
	"first_name": "Peter",
	"last_name": "Sayaseng",
	"employee_id": 1
}

3. Preview -
{
	"first_name": "Peter",
	"last_name": "Sayaseng",
	"employee_id": 1,
	"id": 1
}

B. Delete a technician using this URL http://localhost:8080/api/technicians/:id/


**APPOINTMENT**


A. Input, URL, and preview in POSTING, GETTING an appointment are as follows:

1. URL - http://localhost:8080/api/appointments/

2. Input as JSON(For POST request only) -
{
	"date_time": "2023-10-27",
	"reason": "Engine Failure",
	"customer":"Kim Reyes",
	"vin": "YGTDT2A19B7240639",
	"technician": 2
}
3. Preview -
{
	"date_time": "2023-10-27",
	"reason": "Engine Failure",
	"status": false,
	"customer": "Kim Reyes",
	"vin": "YGTDT2A19B7240639",
	"id": 1,
	"technician": {
		"first_name": "John",
		"last_name": "Doe",
		"employee_id": "1",
		"id": 2
	}
}

B. Delete an appointment using this URL 	http://localhost:8080/api/appointments/:id/

C. Set an appointment status to cancel using this URL http://localhost:8080/api/appointments/:id/cancel/

D. Set an appointment status to finish using this URL http://localhost:8080/api/appointments/:id/finish/


**SPECIAL FEATURE**

Service Microservice has a special feature to provide a VIP treatment for an appointment scheduled if the VIN existed in the inventory. Also, canceled and finished appointment status is available to be seen in the service history page.

To see the VIP and appointment status, click this URL http://localhost:3000/appointments/history/


## Sales microservice

There are 4 classes in models.py (AutomobileVO, Salesperson, Customer and Sale).
AutomobileVO is an instance of the class in Inventory API with the equivalent values to get the specific automobile vin through poller.py after polling.
Salesperon model has 3 fields (first_name, last_name and employee_id).
Customer model has 4 fields (first_name, last_name, address and phone_number).
Sale has 4 fields (automobile, salesperson, customer and price).

User will input the said properties into Insomnia that will be shown in the webpage.
Sales Microservice will run on http://localhost:8090/api/ to complete the following RESTful API request ("GET, POST, DELETE, PUT).


**SALESPERSON**

A. Input, URL, and preview in POSTING, GETTING a Salesperson are as follows:

1. URL - http://localhost:8090/api/salespeople/

2. Input as JSON(For POST request only) -
{
	"first_name": "Kim",
	"last_name": "Reyes",
	"employee_id": 12
}

3. Preview -
{
	"href": "/api/salespeople/1/",
	"first_name": "Kim",
	"last_name": "Reyes",
	"employee_id": 12
}

B. Delete a salesperson using this URL http://localhost:8090/api/salespeople/:id/


**CUSTOMER**


A. Input, URL, and preview in POSTING, GETTING a Customer are as follows:

1. URL - http://localhost:8090/api/customers/

2. Input as JSON(For POST request only) -
{
	"first_name": "Kim",
	"last_name": "Reyes",
	"address": "129 West 81st Street NY 10024",
	"phone_number": "902-345-2356"
}

3. Preview -
{
	"href": "/api/customers/5/",
	"first_name": "Kim",
	"last_name": "Reyes",
	"address": "129 West 81st Street NY 10024",
	"phone_number": "902-345-2356"
}

B. Delete a customer using this URL http://localhost:8090/api/customers/:id/


**SALES**


A. Input, URL, and preview in POSTING, GETTING a Sale are as follows:

1. URL - http://localhost:8090/api/sales/

2. Input as JSON(For POST request only) -
{
	"automobile": "1FAFP90S66Y401287",
	"salesperson": "10",
	"customer": 1,
	"price": 104600
}

3. Preview -
{
	"href": "/api/sales/2/",
	"automobile": {
		"import_href": "/api/automobiles/1FAFP90S66Y401287/",
		"vin": "1FAFP90S66Y401287",
		"sold": false
	},
	"salesperson": {
		"href": "/api/salespeople/1/",
		"first_name": "Kim",
		"last_name": "Reyes",
		"employee_id": "12"
	},
	"customer": {
		"href": "/api/customers/1/",
		"first_name": "Jane",
		"last_name": "Doe",
		"address": "1234 Street Way Bay Point CA 91000",
		"phone_number": "555-555-5555"
	},
	"price": 104600,
	"id": 2
}

B. Delete a sale using this URL http://localhost:8090/api/sales/:id

**SPECIAL FEATURE**

Sales Microservice has a special feature to record a new sale and show the sold cars and history of the salesperson.

Use this URL to create a new record http://localhost:3000/sales/create.

Use this URL to see the Salesperson history and sold cars http://localhost:3000/sales/history.
