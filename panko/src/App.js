import pankoLogo from "./travel.png";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Form from "./components/locations";
import UpdateForm from "./components/UpdateLocations";

function App() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const getLocations = async () => {
    try {
      let res = await axios.get("http://localhost:3001/locations");
      setLocations(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteLocations = async (id) => {
    try {
      let res = await axios.delete(`http://localhost:3001/locations/${id}`);
      setLocations(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateLocations = async (id) => {
    try {
      let res = await axios.get(`http://localhost:3001/locations/${id}`);
      console.log(res);
      setSelectedLocation(res.data);
      handleToggleOn();
    } catch (err) {
      console.log(err);
    }
  };

  const [edit, toggleEdit] = useState(false);

  const handleToggleOn = () => toggleEdit(true);

  const handleToggleOff = () => toggleEdit(false);

  useEffect(() => {
    getLocations();
  }, []);
  return (
    <div className="App">
      <div className="Left-div">
        <div className="logo-title">
          <h3>PANKO</h3>
          <img className="rotate" src={pankoLogo} alt="panko" />
        </div>
        <h2 className="Motto">
          Life is a journey, leave a trail with <strike>breadcrumbs</strike>
        </h2>
        <h2 className="Motto2">PANKO</h2>
      </div>
      {edit ? (
        <UpdateForm
          selectedLocation={selectedLocation}
          getLocations={getLocations}
          handleToggleOff={handleToggleOff}
        />
      ) : (
        <Form getLocations={getLocations} handleToggleOff={handleToggleOff} />
      )}

      <header className="App-header">
        <div>
          <div className="Scroll-div">
            <p>Locations are here.</p>
            {locations.map((location) => (
              <div className="Location" key={location._id}>
                <h3>Location: {location.locationName}</h3>
                <p>Type of Location: {location.locationType}</p>
                <p>Address: {location.address}</p>
                <p>Description: {location.description}</p>
                <button onClick={() => deleteLocations(location._id)}>
                  delete
                </button>
                <button onClick={() => updateLocations(location._id)}>
                  update
                </button>
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
