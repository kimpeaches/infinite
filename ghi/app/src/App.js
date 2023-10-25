import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AgentList from './Sales/AgentList';
import AgentForm from './Sales/AgentForm';
import CustomersList from './Sales/CustomersList';
import CustomersForm from './Sales/CustomersForm';
import SalesList from './Sales/SalesList';
import SalesForm from './Sales/SalesForm';
import SalesHistory from './Sales/SalesHistory';
import ModelList from './Inventory/ModelList';
import ModelForm from './Inventory/ModelForm';
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
