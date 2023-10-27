function MainPage() {
  const containerStyle = {
    padding: '100px',
  };

  const headingStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: "gray",
    textShadow: "4px 4px 4px black"

  };

  const leadStyle = {
    fontSize: '2rem',
    marginBottom: '10px',
    color: "gray",
    textShadow: "4px 4px 4px black"
  };

  return (

    <div style={containerStyle} className="px-4 py-5 my-5 text-center">
      <h1 style={headingStyle} className="display-5 fw-bold">
        Infinite Motors
      </h1>
      <div className="col-lg-6 mx-auto">
        <p style={leadStyle} className="lead mb-4">
        "The premiere solution for automobile dealership management, driving your success with innovation, efficiency, and customer satisfaction!"
        </p>
      </div>
    </div>
  );
}

export default MainPage;
