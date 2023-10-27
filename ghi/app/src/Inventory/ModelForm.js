import React, { useEffect, useState } from "react";
import '/app/src/index.css';

function ModelForm({getModels}) {

  const [manufacturers, setManufacturers] = useState([])
  const fetchData = async () => {
    const response = await fetch("http://localhost:8100/api/manufacturers/");
    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    new FormData(e.target).forEach((value, key) => (data[key] = value));
    console.log(data)
    const modelUrl = 'http://localhost:8100/api/models/';
    const fetchConfig = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const response = await fetch(modelUrl, fetchConfig);
    if (response.ok) {
      e.target.reset();
      getModels()
    }
}

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-4 translucent-table">
            <div className="card-body">
              <h3 className="card-title" style={{ fontSize: '3rem', fontWeight: 'bold', color: "white", textShadow: "4px 4px 4px black" }}>Create a vehicle model</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="text" className="form-control" name="name" placeholder="Model name" />
                </div>
                <div className="mb-3">
                  <input type="url" className="form-control" name="picture_url" placeholder="Picture URL" />
                </div>
                <div>
                  <select name="manufacturer_id">
                    <option value="">Choose a manufacturer</option>
                    {manufacturers.map(manufacturer => {
                      return (
                        <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                      )
                    })}
                  </select>
                </div>

                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelForm
