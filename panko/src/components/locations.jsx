import { useState } from "react";
import axios from "axios";
import LocationImg from "./location.png";

const Form = (props) => {
  const initialState = {
    locationName: "",
    locationType: "restaurant",
    address: "",
    description: "",
  };

  const [formState, setFormState] = useState(initialState);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:3001/locations", formState);

    setFormState(initialState);
    props.getLocations();
    props.handleToggleOff();
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  return (
    <div className="Form-div">
      <img className="icon" src={LocationImg} alt="location" />
      <form className="Form" onSubmit={handleSubmit}>
        <label htmlFor="LocationName">Location:</label>
        <input
          placeholder="your location here"
          type="text"
          id="locationName"
          onChange={handleChange}
          value={formState.locationName}
        />
        <label htmlFor="locationType">Type:</label>
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
          placeholder="address here"
          type="text"
          id="address"
          onChange={handleChange}
          value={formState.address}
        />
        <label htmlFor="description">Description</label>
        <textarea
          placeholder="short description here"
          id="description"
          cols="30"
          rows="3"
          onChange={handleChange}
          value={formState.description}
        ></textarea>
        <button className="form-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
