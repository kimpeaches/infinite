import React from "react";
import '/app/src/index.css';

function AutomobileList({ automobiles }) {
  return (
    <div className="container center-table-container">
      <div>
        <h2 className="text-center" style={{ fontSize: '3rem', fontWeight: 'bold', color: "white", textShadow: "4px 4px 4px black" }} >Automobiles</h2>
        <table className="table translucent-table">
          <thead>
            <tr>
              <th className="text-left">VIN</th>
              <th className="text-left">Color</th>
              <th className="text-left">Year</th>
              <th className="text-left">Model</th>
              <th className="text-left">Manufacturer</th>
              <th className="text-left">Sold</th>
            </tr>
          </thead>
          <tbody>
            {automobiles.map((automobile) => {
              return (
                <tr key={automobile.id}>
                  <td className="text-left">{automobile.vin}</td>
                  <td className="text-left">{automobile.color}</td>
                  <td className="text-left">{automobile.year}</td>
                  <td className="text-left">{automobile.model.name}</td>
                  <td className="text-left">{automobile.model.manufacturer.name}</td>
                  <td className="text-left">{automobile.sold}</td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AutomobileList;
