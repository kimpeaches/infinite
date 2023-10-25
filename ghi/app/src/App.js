import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AgentList from './Sales/AgentList';
import TechnicianList from './Services/TecnicianList';
import React, { useEffect, useState } from 'react';
import TechnicianForm from './Services/TechnicianFrom';
import AppointmentList from './Services/Appointment';
import ManufacturerList from './Inventory/Manufacturer';
import ManufacturerForm from './Inventory/ManufacturerForm';

function App() {
  const [technician, setTechnician] = useState([])
  const [appointment, setAppointment] = useState([])
  const [manufacturer, setManufacturer] = useState([])

  async function getManufacturer(){
    const response = await fetch("http://localhost:8100/api/manufacturers/")
    const {manufacturers} = await response.json()
    setManufacturer(manufacturers)
    }
  useEffect(() => {
      getManufacturer()
  }, [])


  async function getTechnicians(){
    const response = await fetch("http://localhost:8080/api/technicians/")
    const {technician} = await response.json()
    setTechnician(technician)
  }
  useEffect(() => {
    getTechnicians()
  }, [])


  async function getAppointments(){
    const response = await fetch("http://localhost:8080/api/appointments/")
    const {appointment} = await response.json()
    setAppointment(appointment)
  }
  useEffect(() => {
    getAppointments()
  }, [])




  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="salespeople/" element={<AgentList />} />
          <Route path="manufacturer">
            <Route path="list" element={<ManufacturerList manufacturer={manufacturer} />}/>
            <Route path="new" element={<ManufacturerForm />}/>
            </Route>
          <Route path="technicians">
            <Route path="list" element={<TechnicianList technician={technician} />}/>
            <Route path="new" element={<TechnicianForm />}/>
            </Route>
          <Route path="appointments">
            <Route path="list" element={<AppointmentList appointment={appointment} />}/>
            {/* <Route path="new" element={<AppointmentForm />}/> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
