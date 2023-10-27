import React from 'react';

function TechnicianList({ technician }) {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const rowStyle = {
    fontSize: '24px',
    color: 'gray',
    marginBottom: '20px',
    border: '1px solid gray',
    padding: '10px',
    textAlign: 'center',
  };

  return (
    <div className="container" style={containerStyle}>
      <h2 className="text-center">Technicians</h2>
      {technician.map((tech) => {
        return (
          <div key={tech.employee_id} style={rowStyle}>
            <p>
              <strong>Employee ID:</strong> {tech.employee_id}
            </p>
            <p>
              <strong>First Name:</strong> {tech.first_name}
            </p>
            <p>
              <strong>Last Name:</strong> {tech.last_name}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default TechnicianList;
