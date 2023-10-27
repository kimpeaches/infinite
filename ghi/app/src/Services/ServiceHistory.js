import React from 'react';

function ServiceHistory({ appointment }) {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const appointmentStyle = {
    fontSize: '24px',
    color: 'gray',
    marginBottom: '20px',
    border: '1px solid gray',
    padding: '10px',
  };

  return (
    <div className="container text-center">
      <h2>Service Appointments</h2>
      <div style={containerStyle}>
        {appointment.map((appointment) => {
          let newtime = new Date(appointment.date_time);
          let date = newtime.toLocaleDateString("en-US");
          let time = newtime.toLocaleTimeString("en-US");

          return (
            <div key={appointment.id} style={appointmentStyle}>
              <p>
                <strong>Vin:</strong> {appointment.vin}
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
                {appointment.technician.first_name} {appointment.technician.last_name}
              </p>
              <p>
                <strong>Reason:</strong> {appointment.reason}
              </p>
              <p>
                <strong>Status:</strong> {appointment.status}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceHistory;
