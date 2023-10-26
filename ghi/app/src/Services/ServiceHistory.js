import React, { useEffect, useState } from 'react';

function ServiceHistoryList() {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [display, setDisplay] = useState([])

  const fetchAppointments = async () => {
    const url = 'http://localhost:8080/api/appointments/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAppointments(data.appointments);
      setDisplay(data.display)
    }
  };
  const[VIPS, setVIPS] = useState([]);

  const fetchVIP = async () => {
    const url = "http://localhost:8100/api/automobiles/";
    const response = await Promise.resolve(fetch(url));
    if (response.ok) {
      const data = await response.json();
      data.autos.map (auto => auto.vin)
      console.log(data)
      setVIPS(data.autos.map (auto => auto.vin));
      console.log(VIPS)
  }}

  useEffect(() => {
    fetchAppointments();
    fetchVIP();
  }, []);

  const isVIP = (appointment) => {
    return VIPS.includes(appointment.vin);
  };

  const filterAppointments = (appointments) => {
    if (searchTerm == "") {
      return appointments
    }
    else if (searchTerm) {
      return appointments.filter((appointment) => {
       return appointment.vin.toLowerCase().includes(searchTerm.toLowerCase());
      });
    } else {
      return appointments;
    }
  };

  const handleSearch = () => {
    setDisplay(filterAppointments(appointments));
    console.log(display);
  }

  return (
    <>
    <h1>Service History</h1>
      <div>
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by VIN" />
        <button onClick={handleSearch}>Search</button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>Is VIP?</th>
            <th>Customer Name</th>
            <th>Appointment Date</th>
            <th>Technician</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {display.map(appointments => {
            return (
              <tr key={appointments.id}>
                <td className="align-middle">{appointments.vin}</td>
                <td>{isVIP(appointments) ? 'Yes' : 'No'}</td>
                <td className="align-middle">{appointments.customer}</td>
                <td className="align-middle">{appointments.date_time}</td>
                <td className="align-middle">{appointments.technician.first_name} {appointments.technician.last_name}</td>
                <td className="align-middle">{appointments.reason}</td>
                <td className="align-middle">{appointments.status}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
}

export default ServiceHistoryList;
