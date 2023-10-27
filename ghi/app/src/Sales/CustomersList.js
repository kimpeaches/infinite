
import React, { useEffect, useState } from 'react';

function CustomersList() {
  const [customer, setCustomer] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:8090/api/customers/");
    if (response.ok) {
      const data = await response.json();
      setCustomer(data.customer);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center" style={{ fontSize: '3rem', fontWeight: 'bold', color: "white", textShadow: "4px 4px 4px black" }}>Customers</h2>
      <div className="row">
        {customer.map((customer, index) => (
          <div key={customer.id} className="col-md-4 mb-4 text-center">
            <h4 style={{ fontSize: '30px', color: "gray", textShadow: "4px 4px 4px black"}}>
               {index + 1}: {customer.first_name} {customer.last_name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomersList;
