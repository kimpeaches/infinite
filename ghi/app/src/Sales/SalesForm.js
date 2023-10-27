import React, { useEffect, useState } from 'react';
import '/app/src/index.css';
function SalesForm() {

    const [salesperson, setSalesperson] = useState([]);
    const [automobiles, setAutomobiles] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [price, setPrice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {};
        new FormData(e.target).forEach((value, key) => (data[key] = value));
        data.price = parseInt(data.price)
        data.customer = parseInt(data.customer)

        const salesUrl = "http://localhost:8090/api/sales/";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(salesUrl, fetchConfig);
        if (response.ok) {
            const newSale = await response.json();
            setPrice("");
            setAutomobiles([]);
            setSalesperson([]);
            setCustomers([]);

            const vin = data.automobile
            const soldAuto = `http://localhost:8100/api/automobiles/${vin}/`;
            const soldAutoConfig = {
                method: "PUT",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({ "sold": true }),
            };
            const soldAutoResponse = await fetch(soldAuto, soldAutoConfig)
        }
    };

    async function fetchAutomobiles() {
        const automobileUrl = "http://localhost:8100/api/automobiles/";
        const response = await fetch(automobileUrl);
        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.autos.filter(auto => auto.sold === false));
        }
    }

    async function fetchSalespeople() {
        const salespersonUrl = "http://localhost:8090/api/salespeople/";
        const response = await fetch(salespersonUrl);
        if (response.ok) {
            const data = await response.json();
            setSalesperson(data.salesperson);
        }
    }

    async function fetchCustomers() {
        const customerUrl = "http://localhost:8090/api/customers/";
        const response = await fetch(customerUrl);
        if (response.ok) {
            const data = await response.json();
            setCustomers(data.customer);
        }
    }

    useEffect(() => {
        fetchAutomobiles();
        fetchSalespeople();
        fetchCustomers();
    }, []);



    return (
        <div className="container">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4 translucent-table">
                        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: "white", textShadow: "4px 4px 4px black" }}>Record a New Sale</h1>
                        <form id="create-record-of-sale-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="offset-3 col-6">
                                    <label htmlFor="automobile_vin">Automobile VIN</label>
                                    <div className="form-floating mb-3">
                                        <select placeholder="Automobile" required type="text" name="automobile" id="automobile" className="form-control">
                                            <option value="">Choose an automobile VIN</option>
                                            {automobiles.map((auto) => {
                                                return (
                                                    <option key={auto.id} value={auto.vin}>
                                                        {auto.vin}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <label htmlFor="salesperson">Salesperson</label>
                                    <div className="form-floating mb-3">
                                        <select placeholder="Salesperson" required name="salesperson" id="salesperson" className="form-control" >
                                            <option value="">Choose a Salesperson</option>
                                            {salesperson.map(sales => {
                                                return (
                                                    <option key={sales.id} value={sales.id}>
                                                        {sales.employee_id}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <label htmlFor="customer">Customer</label>
                                    <div className="form-floating mb-3">
                                        <select placeholder="Customer" required name="customer" id="customer" className="form-control" >
                                            <option value="">Choose a customer</option>
                                            {customers.map(customer => {
                                                return (
                                                    <option key={customer.id} value={customer.id}>
                                                        {customer.first_name} {customer.last_name}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input placeholder="Price" required type="number" id="price" name="price" className="form-control" />
                                        <label htmlFor="price">Price</label>
                                    </div>
                                    <button className="btn btn-primary">Create</button>


                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SalesForm;



// import React, { useEffect, useState} from "react";  function SalesPersonHistory() {     const [sales, setSales] = useState([]);     const [salesPeople, setSalesPeople] = useState([]);     const [salesPerson, setSalesPerson] = useState('');      const fetchSalesPeople = async () => {         const url = "http://localhost:8090/api/salespeople/";         const response = await fetch(url);         if (response.ok) {             const data = await response.json();             setSalesPeople(data.salesperson);         }     }     const handleSalesPersonChange = (event) => {         const {value} = event.target;         setSalesPerson(value);         fetchSales();     }         const fetchSales = async () => {         const url = "http://localhost:8090/api/sales/";         const response = await fetch(url);         if (response.ok) {             const data = await response.json();             setSales(data.sales);         }     }     useEffect(() => {         fetchSales();         fetchSales
// import React, { useEffect, useState} from "react";

// function SalesPersonHistory() {
//     const [sales, setSales] = useState([]);
//     const [salesPeople, setSalesPeople] = useState([]);
//     const [salesPerson, setSalesPerson] = useState('');

//     const fetchSalesPeople = async () => {
//         const url = "http://localhost:8090/api/salespeople/";
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             setSalesPeople(data.salesperson);
//         }
//     }
//     const handleSalesPersonChange = (event) => {
//         const {value} = event.target;
//         setSalesPerson(value);
//         fetchSales();
//     }
//         const fetchSales = async () => {
//         const url = "http://localhost:8090/api/sales/";
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             setSales(data.sales);
//         }
//     }
//     useEffect(() => {
//         fetchSales();
//         fetchSalesPeople();
//     }, []);
// return (
//         <div className="container my-3">
//             <h1>Salesperson History</h1>
//             <div className="my-3">
//                 <select onChange={handleSalesPersonChange} id="salesperson-select">
//                     <option value="">Select a Salesperson</option>
//                     {salesPeople.map(person => {
//                         return (
//                             <option key={person.id} value={person.id}>
//                                 {person.first_name + " " + person.last_name}
//                             </option>
//                         )
//                     })}
//                 </select>
//             </div>
//             <table className="table table-striped">
//                 <thead>
//                     <tr>
//                         <th>Salesperson</th>
//                         <th>Customer</th>
//                         <th>VIN</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {sales
//                     .filter(sale => sale.salesperson.id.toString() === salesPerson)
//                     .map(sale => {
//                         return (
//                             <tr key={sale.id}>
//                                 <td>{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
//                                 <td>{sale.customer.first_name} {sale.customer.last_name}</td>
//                                 <td>{sale.automobile.vin}</td>
//                                 <td>${sale.price}</td>
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     )
// }
// export default SalesPersonHistory;
