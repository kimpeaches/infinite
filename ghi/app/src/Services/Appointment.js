function AppointmentList(props) {
    return (
        <>
            <h2 className="text-center">Service Appointments</h2>
        <table className="table-fill">
        <thead>
        <tr>
            <th className="text-left">Vin</th>
            <th className="text-left">Customer</th>
            <th className="text-left">Date</th>
            <th className="text-left">Technician</th>
            <th className="text-left">Reason</th>
            <th className="text-left">status</th>
        </tr>
        </thead>
        <tbody className="table-hover">
            {props.appointment.map(appointment => {
                return (
                <tr key={ appointment.id }>
                    <td className="text-left">{ appointment.vin }</td>
                    <td className="text-left">{ appointment.customer }</td>
                    <td className="text-left">{ appointment.date_time }</td>
                    <td className="text-left">{ appointment.technician.first_name }</td>
                    <td className="text-left">{ appointment.reason }</td>
                    <td className="text-left">{ appointment.status }</td>
                </tr>
                );
            })}
        </tbody>
    </table>
    </>
    );


}

export default AppointmentList;
