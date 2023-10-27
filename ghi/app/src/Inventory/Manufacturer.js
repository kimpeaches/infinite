import React from 'react';

function ManufacturerList({ manufacturer }) {
  return (
    <div className="container my-2">
      <h2 className="text-center mb-4 text-secondary">Manufacturers</h2>
      <div className="row">
        {manufacturer.map((manufacturer) => (
          <div key={manufacturer.id} className="col-md-4 mb-4">
            <div className="text-center">
              <h4
                style={{
                  fontSize: '30px',
                  color: "gray"
                }}
              >
                {manufacturer.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManufacturerList;
