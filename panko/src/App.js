import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Form from "./components/locations";

function App() {
  const [locations, setLocations] = useState([]);

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

  useEffect(() => {
    getLocations();
  }, []);
  return (
    <div className="App">
      <div className="Left-div">
        <h3>PANKO</h3>
        <h1>What is the place you are vistiing?</h1>
      </div>
      <Form getLocations={getLocations} />
      <header className="App-header">
        <div>
          <h1>LOCATIONS:</h1>
          {locations.map((location) => (
            <div className="Location" key={location._id}>
              <h3>Location: {location.locationName}</h3>
              <p>Type of Location: {location.locationType}</p>
              <p>Address: {location.address}</p>
              <p>Description: {location.description}</p>
              <button onClick={() => deleteLocations(location._id)}>
                delete
              </button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
