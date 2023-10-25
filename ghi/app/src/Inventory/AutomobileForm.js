function AutomobileForm({models}){
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {}
        new FormData(e.target).forEach((value,key) => (data[key]= value))

        const manuUrl = "http://localhost:8100/api/automobiles/"
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
    }
}



    return(
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card mt-4">
                <div className='card-body'>
          <h1 className='card-title'>Create a new Automobile</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="text" className="form-control" name="color" placeholder="Color" />
              </div>
            <div className="mb-3">
              <input type="text" className="form-control" name="year" placeholder="Year" />
              </div>
            <div className="mb-3">
              <input type="text" className="form-control" name="vin" placeholder="VIN" />
              </div>
              <div>
                    <select name="model">
                        <option value="">Choose a model</option>
                        {manufacturers.map(manufacturer => {
                                            return (
                                                <option key={manufacturer.href} value={manufacturer.id}>{manufacturer.name}</option>
                                            )
                                        })}
                    </select>
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
export default AutomobileForm
