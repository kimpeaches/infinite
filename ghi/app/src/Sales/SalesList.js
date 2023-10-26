import React, { useEffect, useState } from 'react';

function SalesList() {

    const [sale, setSale] = useState([])

    const getData = async () => {
        const response = await fetch("http://localhost:8090/api/sales/");
        if (response.ok) {
            const data = await response.json();
            setSale(data.sale)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="container">
            <h2 className="text-center">Sales</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Salesperson Name</th>
                        <th>Customer</th>
                        <th>Vin</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sale.map(saleItem => (
                        <tr key={saleItem.id}>
                            <td>{saleItem.salesperson.employee_id}</td>
                            <td>{`${saleItem.salesperson.first_name} ${saleItem.salesperson.last_name}`}</td>
                            <td>{`${saleItem.customer.first_name} ${saleItem.customer.last_name}`}</td>
                            <td>{saleItem.automobile.vin}</td>
                            <td>{saleItem.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );


}

export default SalesList;
