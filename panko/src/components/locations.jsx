import { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const initialState = {
    locationName: "",
    locationType: "",
    address: "",
    description: "",
  };

  const [formState, setFormState] = useState(initialState);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:3001/locations", formState);

    setFormState(initialState);
    props.getLocations();
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  return (
    // Event Listener: tells the browser which event to listen for on which element and what to do when the event happens
    <form onSubmit={handleSubmit}>
      <label htmlFor="LocationName">Location:</label>
      <input
        type="text"
        id="locationName"
        onChange={handleChange}
        value={formState.locationName}
      />
      <label htmlFor="locationType">Type of location:</label>
      <select
        id="locationType"
        onChange={handleChange}
        value={formState.locationType}
      >
        <option value="restaurant">Restaurant</option>
        <option value="attraction">Attraction</option>
        <option value="landmark">Landmark</option>
      </select>
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        onChange={handleChange}
        value={formState.address}
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={formState.description}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
};
export default Form;
