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
import AppointmentForm from './Services/AppointmentForm';
import ManufacturerList from './Inventory/Manufacturer';
import ManufacturerForm from './Inventory/ManufacturerForm';
import AutomobileList from './Inventory/AutomobileList';
import AutomobileForm from './Inventory/AutomobileForm';
import ServiceHistory from './Services/ServiceHistory';


function App() {


  const [technician, setTechnician] = useState([])
  const [appointment, setAppointment] = useState([])
  const [manufacturer, setManufacturer] = useState([])
  const [automobiles, setAutomobiles] = useState([])
  const [models, setModels] = useState([])

  async function getModels(){
    const response = await fetch("http://localhost:8100/api/models/");
    const {models} = await response.json()
    setModels(models)
  }
  useEffect(() => {
    getModels()
  }, [])

  async function getManufacturer(){
    const response = await fetch("http://localhost:8100/api/manufacturers/")
    const {manufacturers} = await response.json()
    setManufacturer(manufacturers)
    }
  useEffect(() => {
      getManufacturer()
  }, [])

  async function getAutomobiles(){
    const response = await fetch("http://localhost:8100/api/automobiles/")
    const {autos} = await response.json()
    setAutomobiles(autos)
    }
  useEffect(() => {
    getAutomobiles()
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
    const {appointments} = await response.json()
    setAppointment(appointments)
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
          <Route path="salespeople/" element={<AgentList />} />
          <Route path="salespeople/create" element={<AgentForm />} />
          <Route path="customers/" element={<CustomersList />} />
          <Route path="customers/create" element={<CustomersForm />} />
          <Route path="sales/" element={<SalesList />} />
          <Route path="sales/create" element={<SalesForm />} />
          <Route path="sales/history" element={<SalesHistory />} />
          <Route path="models/" element={<ModelList models={models} />} />
          <Route path="models/create" element={<ModelForm updateModels={getModels} />} />
          <Route path="automobiles">
            <Route path="list" element={<AutomobileList automobiles={automobiles} />}/>
            <Route path="create" element={<AutomobileForm models={models} updateAuto={getAutomobiles} />}/>
            </Route>
          <Route path="manufacturers">
            <Route path="list" element={<ManufacturerList manufacturer={manufacturer} />}/>
            <Route path="create" element={<ManufacturerForm  updateManufacturer={getManufacturer}/>}/>
            </Route>
          <Route path="technicians">
            <Route path="list" element={<TechnicianList technician={technician} />}/>
            <Route path="create" element={<TechnicianForm updateTechnician={getTechnicians} />}/>
            </Route>
          <Route path="appointments">
            <Route path="list" element={<AppointmentList appointment={appointment} updateAppointment={getAppointments} />}/>
            <Route path="history" element={<ServiceHistory appointment={appointment} />}/>
            <Route path="new" element={<AppointmentForm technician={technician} updateAppointment={getAppointments}  />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
