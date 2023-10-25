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
        <>
            <h2 className="text-center">Sales</h2>
        <table className="table-fill">
        <thead>
        <tr>
            <th className="text-left">Salesperson Employee ID</th>
            <th className="text-left">Salesperson Name</th>
            <th className="text-left">Customer</th>
            <th className="text-left">Vin</th>
            <th className="text-left">Price</th>
        </tr>
        </thead>
        {/* <tbody className="table-hover">
            {sale.map(saleItem => {
                return (
                <tr key={ saleItem.id }>
                    <td className="text-left">{ customer.first_name }</td>
                    <td className="text-left">{ customer.last_name }</td>
                    <td className="text-left">{ customer.phone_number }</td>
                    <td className="text-left">{ customer.address }</td>
                </tr>
                );
            })}
        </tbody> */}
    </table>
    </>
    );

}

export default SalesList;
