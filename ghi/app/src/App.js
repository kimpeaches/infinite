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
// import TechnicianList from './Services/TechnicianList';
import React, { useEffect, useState } from 'react';
// import TechnicianForm from './Services/TechnicianFrom';
import AppointmentList from './Services/Appointment';
// import ManufacturerList from './Inventory/Manufacturer';
// import ManufacturerForm from './Inventory/ManufacturerForm';
import ServiceHistoryList from './Services/ServiceHistory';

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

    <div style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1541599468348-e96984315921?auto=format&fit=crop&q=80&w=1520&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: "100vh",
      backgroundAttachment: "fixed",
      backgroundPosition: "center"
    }}>
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="manufacturers/" element={<ManufacturerList />} /> */}
          {/* <Route path="manufacturers/create" element={<ManufacturerForm />} /> */}
          {/* <Route path="technicians/" element={<TechnicianList />} /> */}
          {/* <Route path="technicians/create" element={<TechnicianForm />} /> */}
          <Route path="appointments/" element={<AppointmentList />} />
          <Route path="salespeople/" element={<AgentList />} />
          <Route path="salespeople/create" element={<AgentForm />} />
          <Route path="customers/" element={<CustomersList />} />
          <Route path="customers/create" element={<CustomersForm />} />
          <Route path="sales/" element={<SalesList />} />
          <Route path="sales/create" element={<SalesForm />} />
          <Route path="sales/history" element={<SalesHistory />} />
          <Route path="models/" element={<ModelList />} />
          <Route path="models/create" element={<ModelForm />} />
          <Route path="services/history" element={<ServiceHistoryList />} />

        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
