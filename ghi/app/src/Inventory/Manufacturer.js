function ManufacturerList({manufacturer}) {
    return (
      <div className="container">
        <h2 className="text-center">Manufacturers</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th className="text-left">Name</th>
            </tr>
          </thead>
          <tbody>
            {manufacturer.map(manufacturer => (
              <tr key={manufacturer.id}>
                <td className="text-left">{manufacturer.name}</td>
             </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    };


export default ManufacturerList;
