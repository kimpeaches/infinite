import React, { useState } from 'react';
import '/app/src/index.css';
function ServiceHistory({ appointment }) {
    const [searchQuery, setSearchQuery] = useState('');
    const filterAppointments = appointment.filter(appointment => {
        return appointment.vin.toLowerCase().includes(searchQuery.toLowerCase());
    })
    return (
        <>
            <h2 className="text-center" style={{ fontSize: '3rem', fontWeight: 'bold', color: "white", textShadow: "4px 4px 4px black" }}>Service Appointments</h2>
            <div className="card mt-4 translucent-table">
            <div className="mb-3 mt-3">
            <input
                type="text"
                placeholder="Search by VIN"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-left">Vin</th>
                        <th className="text-left">VIP</th>
                        <th className="text-left">Customer</th>
                        <th className="text-left">Date</th>
                        <th className="text-left">Time</th>
                        <th className="text-left">Technician</th>
                        <th className="text-left">Reason</th>
                        <th className="text-left">status</th>
                    </tr>
                </thead>
                <tbody className="table-hover">
                    {filterAppointments.map(appointment => {
                        let newtime = new Date(appointment.date_time)
                        let date = newtime.toLocaleDateString("en-US")
                        let time = newtime.toLocaleTimeString("en-US")
                        const vip = appointment.vip ? "Yes" : "No";
                        return (
                            <tr key={appointment.id}>
                                <td>{appointment.vin}</td>
                                <td>{vip}</td>
                                <td>{appointment.customer}</td>
                                <td>{date}</td>
                                <td>{time}</td>
                                <td>{appointment.technician.first_name}{appointment.technician.last_name}</td>
                                <td>{appointment.reason}</td>
                                <td>{appointment.status}</td>
                            </tr>
                        )
                    })};
                </tbody>
            </table>
            </div>
            </div>
        </>
    )
}
export default ServiceHistory;
