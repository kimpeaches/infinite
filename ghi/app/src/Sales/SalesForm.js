import React, { useEffect, useState } from 'react';

function SalesForm() {

    const [salesperson, setSalesperson] = useState([]);
    const [automobiles, setAutomobiles] = useState([]);
    const [customer, setCustomers] = useState([]);
    const [price, setPrice] = useState("");

    const automobileChange = (event) => { setAutomobiles(event.target.value); };

    const personChange = (event) => { setSalesperson(event.target.value); };

    const customerChange = (event) => { setCustomers(event.target.value); };

    const priceChange = (event) => { setPrice(event.target.value); };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.price = price;
        data.salesperson = salesperson;
        data.customer = customer;
        data.automobile = automobiles;

        const salesUrl = "http://localhost:8090/api/sales/";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const soldAuto = "http://localhost:8100/api/automobiles/${vin}";
        const soldAutoConfig = {
            method: "PUT",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({ "sold": true }),
        };

        const response = await fetch(salesUrl, fetchConfig);
        if (response.ok) {
            const newSale = await response.json();
            setPrice("");
            setAutomobiles("");
            setSalesperson("");
            setCustomers("");
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
                    <div className="shadow p-4 mt-4">
                        <h1>Record a New Sale</h1>
                        <form id="create-record-of-sale-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="offset-3 col-6">
                                    <label htmlFor="automobile_vin">Automobile VIN</label>
                                    <div className="form-floating mb-3">
                                        <select value={automobiles} placeholder="Automobile" required type="text" name="automobile" id="automobile" className="form-control" onChange={automobileChange}>
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
                                        <select value={salesperson} placeholder="Salesperson" required name="salesperson" id="salesperson" className="form-control" onChange={personChange}>
                                            <option value="">Choose a Salesperson</option>
                                            {salesperson.map(sales => {
                                                return (
                                                    <option key={sales.id} value={sales.id}>
                                                        {sales.first_name} {sales.last_name}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <label htmlFor="customers">Customer</label>
                                    <div className="form-floating mb-3">
                                        <select value={customer} placeholder="Customer" required name="customers" id="customers" className="form-control" onChange={customerChange}>
                                            <option value="">Choose a customer</option>
                                            {customer.map(customer => {
                                                return (
                                                    <option key={customer.id} value={customer.id}>
                                                        {customer.first_name} {customer.last_name}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <label htmlFor="price">Price</label>
                                    <div className="form-floating mb-3">
                                        <input value={price} placeholder="Price" required type="text" id="price" name="price" className="form-control" onChange={priceChange} />
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
