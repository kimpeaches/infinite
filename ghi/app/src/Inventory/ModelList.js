import React from "react";

function ModelList({ models }) {
  const cardStyle = {
    transition: "transform 0.2s",
    background: "transparent",
    color: "gray",
  };

  const hoverStyle = {
    transform: "scale(1.1)",
  };

  return (
    <div className="container">
      <h2 className="text-center"style={{ fontSize: '3rem', fontWeight: 'bold', color: "white", textShadow: "4px 4px 4px black" }}>Models</h2>
      <div className="row">
        {models.map((model) => (
          <div
            key={model.id}
            className="col-md-4 mb-4"
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = hoverStyle.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
            }}
          >
            <div className="card">
              <img
                src={model.picture_url}
                className="card-img-top"
                alt={model.name}
              />
              <div className="card-body bg-dark">
                <h5 className="card-title">{model.name}</h5>
                <p className="card-text">Manufacturer: {model.manufacturer.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModelList;
