import React, { useEffect, useState } from 'react';
import '/app/src/index.css';

function SalesHistory() {
    const [sale, setSale] = useState([])
    const [salesDisplay, setSalesDisplay] = useState([])
    const [salespeople, setSalesperson] = useState([])
    const [selectedPerson, setSelectedPerson] = useState(undefined)

    const fetchData = async () => {

        const url = 'http://localhost:8090/api/sales/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSale(data.sale)
            setSalesDisplay(sale)
        }
        const salespersonUrl = 'http://localhost:8090/api/salespeople/';
        const salespersonResponse = await fetch(salespersonUrl);
        if (salespersonResponse.ok) {
            const data = await salespersonResponse.json();
            setSalesperson(data.salesperson)
        }

    }

    useEffect(() => {
        fetchData()
    }, []);
    const handleChange = (e) => {
        const employee_id = e.target.value
        setSelectedPerson(employee_id)
    }
    const sales = selectedPerson ? sale.filter(sale => sale.salesperson.employee_id.toString() === selectedPerson) : sale

    return (
        <>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: "white", textShadow: "4px 4px 4px black" }}>Sales History</h2>
            <div className="card mt-4 translucent-table">
            <div className="mb-3 mt-3">
                <select onChange={handleChange} name="salesperson" id="salesperson" className="form-select">
                    <option value="">Choose a salesperson</option>
                    {salespeople.map(agent => {
                        return (
                            <option key={agent.employee_id} value={agent.employee_id}>
                                {agent.employee_id} - {agent.first_name} {agent.last_name}
                            </option>
                        );
                    })}
                </select>
            </div>
            <table className="table translucent-table">
                <thead>
                    <tr>
                        <th>Salesperson Employee ID</th>
                        <th>Salesperson Name </th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale =>
                        (<tr>
                            <td className="align-middle">{sale.salesperson.employee_id}</td>
                            <td className="align-middle">{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
                            <td>{sale.customer.first_name} {sale.customer.last_name}</td>
                            <td>{sale.automobile.vin}</td>
                            <td>{sale.price}</td>
                        </tr>)
                    )}

                </tbody>
            </table>
            </div>
        </>
    );
}

export default SalesHistory
