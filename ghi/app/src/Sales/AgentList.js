
import React, { useEffect, useState } from 'react';

function AgentList() {
  const [salesperson, setSalesperson] = useState([]);

  const getData = async () => {
    const response = await fetch('http://localhost:8090/api/salespeople/');
    if (response.ok) {
      const data = await response.json();
      setSalesperson(data.salesperson);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center" style={{ fontSize: '3rem', fontWeight: 'bold', color: "white", textShadow: "4px 4px 4px black" }}>Sales Agent</h2>
      <div className="row">
        {salesperson.map((agent) => (
          <div key={agent.employee_id} className="col-md-4 mb-4 text-center">
            <h4 style={{ fontSize: '30px', color: "gray", textShadow: "4px 4px 4px black"}}>{agent.first_name} {agent.last_name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgentList;
