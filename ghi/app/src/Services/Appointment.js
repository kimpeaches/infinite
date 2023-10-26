function AppointmentList({appointment, updateAppointment}) {
    const completeAppointment = async (id) => {
        const completeUrl = `http://localhost:8080/api/appointments/${id}/finish/`;
        const fetchConfig = {
          method: "PUT",
          body: JSON.stringify({ "status" : "completed" }),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const completeResponse = await fetch(completeUrl, fetchConfig);
        if (completeResponse.ok) {
            updateAppointment();
        }
      };

    const cancelAppointment = async (id) => {
        const cancelUrl = `http://localhost:8080/api/appointments/${id}/cancel/`;
        const fetchConfig = {
          method: "PUT",
          body: JSON.stringify({ "status": "canceled" }),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const canceleResponse = await fetch(cancelUrl, fetchConfig);
        if (canceleResponse.ok) {
            console.log(canceleResponse)
            updateAppointment();
        }
      };





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
            {appointment.filter((appointment) =>{
                return appointment.status === "created"
            }).map(appointment => {
                    let newtime = new Date(appointment.date_time)
                    let date = newtime.toLocaleDateString("en-US")
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
                            <td>
                                <button onClick={()=> cancelAppointment(appointment.id)}>Cancel</button>
                            </td>
                            <td>
                                <button onClick={()=> completeAppointment(appointment.id)}>Complete</button>
                            </td>
                        </tr>
                    );
                })}

        </tbody>
    </table>
    </>
    );


}

export default AppointmentList;
