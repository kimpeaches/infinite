import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AgentList from './Sales/AgentList';
import AgentForm from './Sales/AgentForm';
import TechnicianList from './Services/TecnicianList';
import React, { useEffect, useState } from 'react';
import TechnicianForm from './Services/TechnicianFrom';
import AppointmentList from './Services/Appointment';
import AppointmentForm from './Services/AppointmentForm';
import ManufacturerList from './Inventory/Manufacturer';
import ManufacturerForm from './Inventory/ManufacturerForm';
import ModelForm from './Inventory/ModelForm';
import ModelList from './Inventory/ModelList';
import CustomersList from './Sales/CustomersList';
import CustomersForm from './Sales/CustomersForm';
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
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="salespeople" element={<AgentList />} />
          <Route path="salespeople">
            <Route path="list" element={<AgentList />}/>
            <Route path="create" element={<AgentForm />}/>
            </Route>
          <Route path="customers">
            <Route path="list" element={<CustomersList />}/>
            <Route path="create" element={<CustomersForm />}/>
            </Route>
          <Route path="automobiles">
            <Route path="list" element={<AutomobileList automobiles={automobiles} />}/>
            <Route path="create" element={<AutomobileForm models={models} updateAuto={getAutomobiles} />}/>
            </Route>
          <Route path="manufacturer">
            <Route path="list" element={<ManufacturerList manufacturer={manufacturer} />}/>
            <Route path="new" element={<ManufacturerForm />}/>
            </Route>
          <Route path="models">
            <Route path="create" element={<ModelForm manufacturer={manufacturer} updateModel={getModels} />}/>
            <Route path="list" element={<ModelList models={models} />}/>
            </Route>
          <Route path="technicians">
            <Route path="list" element={<TechnicianList technician={technician} />}/>
            <Route path="new" element={<TechnicianForm />}/>
            </Route>
          <Route path="appointments">
            <Route path="list" element={<AppointmentList appointment={appointment} updateAppointment={getAppointments} />}/>
            <Route path="history" element={<ServiceHistory appointment={appointment} />}/>
            <Route path="new" element={<AppointmentForm technician={technician} updateAppointment={getAppointments}  />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
