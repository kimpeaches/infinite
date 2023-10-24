import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AgentList from './Sales/AgentList';
import TechnicianList from './Services/TecnicianList';
import React, { useEffect, useState } from 'react';

function App() {
  const [technician, setTechnician] = useState([])

  async function getTechnicians(){
    const response = await fetch("http://localhost:8080/api/technicians/")
    const {technician} = await response.json()
    setTechnician(technician)
  }

  useEffect(() => {
    getTechnicians()
  }, [])

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="salespeople/" element={<AgentList />} />
          <Route path="technicians/" element={<TechnicianList technician={technician} />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
