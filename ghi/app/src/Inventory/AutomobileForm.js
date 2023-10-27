import '/app/src/index.css';

function AutomobileForm({models , updateAuto}){
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {}
        new FormData(e.target).forEach((value,key) => (data[key]= value))
        console.log(data)

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
            updateAuto()
    }
}



    return(
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card mt-4 translucent-table">
                <div className='card-body'>
          <h1 className='card-title'style={{ fontSize: '3rem', fontWeight: 'bold', color: "white", textShadow: "4px 4px 4px black" }}>Create a new Automobile</h1>
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
                    <select name="model_id">
                        <option value="model_id">Choose a model...</option>
                        {models.map(models => {
                                            return (
                                                <option key={models.id} value={models.id}>{models.manufacturer.name} {models.name}</option>
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
