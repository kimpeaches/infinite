function AutomobileList({automobiles}) {
    return (
      <div>
        <h2 className="text-center">Automobiles</h2>
        <table className="table-fill">
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
          <tbody className="table-hover">
            {automobiles.map(automobiles => {
                return (
                <tr key={ automobiles.id }>
                    <td className="text-left">{automobiles.vin}</td>
                    <td className="text-left">{automobiles.color}</td>
                    <td className="text-left">{automobiles.year}</td>
                    <td className="text-left">{automobiles.model.name}</td>
                    <td className="text-left">{automobiles.model.manufacturer.name}</td>
                </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    );
}

export default AutomobileList;
