function ServiceHistory({appointment}) {
    return (
        <>
            <h2 className="text-center">Service Appointments</h2>
        <table className="table-fill">
        <thead>
        <tr>
            <th className="text-left">Vin</th>
            <th className="text-left">Customer</th>
            <th className="text-left">Date</th>
            <th className="text-left">Time</th>
            <th className="text-left">Technician</th>
            <th className="text-left">Reason</th>
            <th className="text-left">status</th>
        </tr>
        </thead>
        <tbody className="table-hover">
            {appointment.map(appointment => {
                    let newtime = new Date(appointment.date_time)
                    let date = newtime.toLocaleDateString("en-US")
                    console.log(newtime)
                    let time = newtime.toLocaleTimeString("en-US")
                    return (
                        <tr key={appointment.id}>
                            <td>{appointment.vin}</td>
                            <td>{appointment.customer}</td>
                            <td>{date}</td>
                            <td>{time}</td>
                            <td>{appointment.technician.first_name}{appointment.technician.last_name}</td>
                            <td>{appointment.reason}</td>
                            <td>{appointment.status}</td>
                        </tr>
                    );
                })}

        </tbody>
    </table>
    </>
    );


}

export default ServiceHistory;
