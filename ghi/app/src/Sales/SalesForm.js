import React from "react";

function SalesForm(props) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {};
        new FormData(e.target).forEach((value, key) => (data[key] = value));

        const salesUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(salesUrl, fetchConfig);
        if (response.ok) {
            const newSales = await response.json();
            console.log(newSales);
            e.target.reset();
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card mt-4">
                        <div className="card-body">
                            <h3 className="card-title">Record a new sale</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="Automobile VIN" class="form-label">Automobile VIN</label>
                                    <div>
                                        <select name="automobile">
                                            <option value="">Choose an automobile</option>
                                            {/* {conferences.map(conference => {
                                            return (
                                                <option key={conference.href} value={conference.href}>{conference.name}</option>
                                            )
                                        })} */}
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="salesperson" class="form-label">Salesperson</label>
                                    <div>
                                        <select name="salesperson">
                                            <option value="">Choose a salesperson</option>
                                            {/* {conferences.map(conference => {
                                            return (
                                                <option key={conference.href} value={conference.href}>{conference.name}</option>
                                            )
                                        })} */}
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="customer" class="form-label">Customer</label>
                                    <div>
                                        <select name="Customer">
                                            <option value="">Choose a customer</option>
                                            {/* {conferences.map(conference => {
                                            return (
                                                <option key={conference.href} value={conference.href}>{conference.name}</option>
                                            )
                                        })} */}
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" class="form-label">Price</label>
                                    <input placeholder="0" type="text" id="price" name="price" className="form-control" />
                                </div>


                                <button type="submit" className="btn btn-primary">
                                    Create
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SalesForm
