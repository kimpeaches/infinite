import React from 'react';

function AppointmentList({ appointment, updateAppointment }) {
  const completeAppointment = async (id) => {
    const completeUrl = `http://localhost:8080/api/appointments/${id}/finish/`;
    const fetchConfig = {
      method: "PUT",
      body: JSON.stringify({ "status": "completed" }),
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
      console.log(canceleResponse);
      updateAppointment();
    }
  };

  const appointmentContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const appointmentStyle = {
    fontSize: '24px',
    color: 'gray',
    marginBottom: '20px',
    border: '1px solid gray',
    padding: '20px', // Enlarged padding
    textAlign: 'center',
  };

  return (
    <div className="container" style={appointmentContainerStyle}>
      <h2 className="text-center">Service Appointments</h2>
      {appointment
        .filter((appointment) => appointment.status === "created")
        .map((appointment) => {
          let newtime = new Date(appointment.date_time);
          let date = newtime.toLocaleDateString("en-US");
          let time = newtime.toLocaleTimeString("en-US");
          const vip = appointment.vip ? "Yes" : "No";

          return (
            <div key={appointment.id} style={appointmentStyle}>
              <p>
                <strong>Vin:</strong> {appointment.vin}
              </p>
              <p>
                <strong>VIP:</strong> {vip}
              </p>
              <p>
                <strong>Customer:</strong> {appointment.customer}
              </p>
              <p>
                <strong>Date:</strong> {date}
              </p>
              <p>
                <strong>Time:</strong> {time}
              </p>
              <p>
                <strong>Technician:</strong>{' '}
                {appointment.technician.first_name}
                {appointment.technician.last_name}
              </p>
              <p>
                <strong>Reason:</strong> {appointment.reason}
              </p>
              <p>
                <strong>Status:</strong> {appointment.status}
              </p>
              <button onClick={() => cancelAppointment(appointment.id)}>
                Cancel
              </button>
              <button onClick={() => completeAppointment(appointment.id)}>
                Complete
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default AppointmentList;
