import React, { useEffect, useState } from 'react';

function SalesHistory() {

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

    const [salesperson, setSalesperson] = useState([])

    const fetchData = async () => {
        const response = await fetch("http://localhost:8090/api/salespeople/");
        if (response.ok) {
            const data = await response.json();
            setSalesperson(data.salesperson)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <h2 className="text-center">Saleperson History</h2>
            <div className="mb-3">
                <div>
                    <select name="salesperson">
                        <option value="">Choose a salesperson</option>
                        {salesperson.map(salesperson => {
                                            return (
                                                <option key={salesperson.href} value={salesperson.id}>{salesperson.first_name}</option>
                                            )
                                        })}
                    </select>
                </div>
            </div>

            <table className="table-fill">
                <thead>
                    <tr>
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
export default SalesHistory
