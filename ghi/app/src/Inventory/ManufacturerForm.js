function ManufacturerForm({updateManufacturer}){
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {}
        new FormData(e.target).forEach((value,key) => (data[key]= value))

        const manuUrl = "http://localhost:8100/api/manufacturers/"
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        }

        const response = await fetch(manuUrl, fetchConfig)
        if (response.ok){
            e.target.reset()
            updateManufacturer()
    }
}

    return(
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card mt-2 translucent-table">
                <div className='card-body'>
          <h1 className='card-title'style={{ fontSize: '3rem', fontWeight: 'bold', color: "white", textShadow: "4px 4px 4px black" }}>Create a new Manufacturer</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="text" className="form-control" name="name" placeholder="Name" />
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
export default ManufacturerForm
