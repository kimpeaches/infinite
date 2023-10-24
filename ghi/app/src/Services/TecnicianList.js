
function TechnicianList(props) {
    return (
        <>
            <h2 className="text-center">Technicians</h2>
        <table className="table-fill">
        <thead>
        <tr>
            <th className="text-left">Employee ID</th>
            <th className="text-left">First Name</th>
            <th className="text-left">Last Name</th>
        </tr>
        </thead>
        <tbody className="table-hover">
            {props.technician.map(tech => {
                return (
                <tr key={ tech.employee_id }>
                    <td className="text-left">{ tech.employee_id }</td>
                    <td className="text-left">{ tech.first_name }</td>
                    <td className="text-left">{ tech.last_name }</td>
                </tr>
                );
            })}
        </tbody>
    </table>
    </>
    );


}

export default TechnicianList;
