import React, { useEffect, useState } from 'react';

function ModelList() {

    const [models, setModels] = useState([])

    const getData = async () => {
        const response = await fetch("http://localhost:8100/api/models/");
        if (response.ok) {
            const data = await response.json();
            setModels(data.models)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="container">
          <h2 className="text-center">Models</h2>
          <div className="row">
            {models.map((model) => (
              <div key={model.id} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src={model.picture_url}
                    className="card-img-top"
                    alt={model.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{model.name}</h5>
                    <p className="card-text">Manufacturer: {model.manufacturer.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };


export default ModelList;
