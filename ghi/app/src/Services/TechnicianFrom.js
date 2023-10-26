function TechnicianForm(props){
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {}
        new FormData(e.target).forEach((value,key) => (data[key]= value))

        const techUrl = "http://localhost:8080/api/technicians/"
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        }

        const response = await fetch(techUrl, fetchConfig)
        if (response.ok){
            e.target.reset()
    }
}



    return(
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card mt-4">
                <div className='card-body'>
          <h1 className='card-title'>Create a new Technician</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="text" className="form-control" name="first_name" placeholder="First name" />
              </div>
            <div className="mb-3">
              <input type="text" className="form-control" name="last_name" placeholder="Last name" />
              </div>
            <div className="mb-3">
              <input type="text" className="form-control" name="employee_id" placeholder="Employee ID" />
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
export default TechnicianForm