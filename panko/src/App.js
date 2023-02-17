import pankoLogo from "./travel.png";
import crossIcon from "./cross.png";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Form from "./components/locations";
import UpdateForm from "./components/UpdateLocations";
import Destination from "./components/destination";

function App() {
  const [locations, setLocations] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const getLocations = async () => {
    try {
      let res = await axios.get("http://localhost:3001/locations");
      setLocations(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getDestinations = async () => {
    try {
      let res = await axios.get("http://localhost:3001/cities");
      setDestinations(res.data);
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
    getDestinations();
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
        {destinations.map((destination) => (
          <div>
            <h3>{destination.cityName}</h3>
          </div>
        ))}
        <Destination getDestinations={getDestinations} />
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
            <p className="no-locations-msg">No locatons have been added.</p>
            {locations.map((location) => (
              <div className="Location" key={location._id}>
                <div className="btn-div">
                  <button
                    className="delete-btn"
                    onClick={() => deleteLocations(location._id)}
                  >
                    <img className="cross" src={crossIcon} alt="cross" />
                  </button>
                </div>
                <h3>Location: {location.locationName}</h3>
                <p>Type of Location: {location.locationType}</p>
                <p>Address: {location.address}</p>
                <p>Description: {location.description}</p>

                <button
                  className="edit-btn"
                  onClick={() => updateLocations(location._id)}
                >
                  EDIT
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
