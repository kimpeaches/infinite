
import React, { useEffect, useState } from 'react';

function AgentList() {

    const [salesperson, setSalesperson] = useState([])

    const getData = async () => {
        const response = await fetch("http://localhost:8090/api/salespeople/");
        if (response.ok) {
            const data = await response.json();
            setSalesperson(data.salesperson)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <h2 className="text-center">Sales Agent</h2>
        <table className="table-fill">
        <thead>
        <tr>
            <th className="text-left">Employee ID</th>
            <th className="text-left">First Name</th>
            <th className="text-left">Last Name</th>
        </tr>
        </thead>
        <tbody className="table-hover">
            {salesperson.map(agent => {
                return (
                <tr key={ agent.employee_id }>
                    <td className="text-left">{ agent.employee_id }</td>
                    <td className="text-left">{ agent.first_name }</td>
                    <td className="text-left">{ agent.last_name }</td>
                </tr>
                );
            })}
        </tbody>
    </table>
    </>
    );


}

export default AgentList;
