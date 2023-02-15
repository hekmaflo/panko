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
      <header className="App-header">
        <Form getLocations={getLocations} />
        <h1>LOCATIONS:</h1>
        {locations.map((location) => (
          <div key={location._id}>
            <h1>Location: {location.locationName}</h1>
            <h3>Type of Location: {location.locationType}</h3>
            <p>Address: {location.address}</p>
            <p>Description: {location.description}</p>
            <button onClick={() => deleteLocations(location._id)}>
              delete
            </button>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
