function ManufacturerList({manufacturer}) {
    return (
      <div>
        <h2 className="text-center">Manufacturer</h2>
        <table className="table-fill">
          <thead>
            <tr>
              <th className="text-left">Manufacturer</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {manufacturer.map(manufacturer => {
                return (
                <tr key={ manufacturer.id }>
                    <td className="text-left">{manufacturer.name}</td>
                </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    );
}

export default ManufacturerList;
