import '/app/src/index.css';
function AppointmentForm({technician,updateAppointment}){
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {}
        new FormData(e.target).forEach((value,key) => (data[key]= value))


        const appUrl = "http://localhost:8080/api/appointments/"
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        }

        const response = await fetch(appUrl, fetchConfig)
        if (response.ok){
            e.target.reset()
            updateAppointment()
    }
}



    return(
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card mt-4 translucent-table">
                <div className='card-body'>
          <h1 className='card-title' style={{ fontSize: '3rem', fontWeight: 'bold', color: "white", textShadow: "4px 4px 4px black" }}>Create a new Appointment</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="text" className="form-control" name="vin" placeholder="Automobile VIN" />
              </div>
            <div className="mb-3">
              <input type="text" className="form-control" name="customer" placeholder="Customer" />
              </div>
            <div className="mb-3">
              <input type="datetime-local" className="form-control" name="date_time" placeholder="mm/dd/yyyy" />
              </div>
              <div>
                    <select name="technician">
                        <option value="">Choose a technician...</option>
                        {technician.map(technician => {
                                            return (
                                                <option key={technician.employee_id} value={technician.employee_id}>{technician.first_name} {technician.last_name}</option>
                                            )
                                        })}
                    </select>
                </div>
                <div className="mb-3">
              <input type="text" className="form-control" name="reason" placeholder="Reason" />
              </div>
            <button type="submit" className="btn btn-primary">Create</button>
          </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default AppointmentForm
