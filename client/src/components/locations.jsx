import { useState } from "react";
import axios from "axios";
import LocationImg from "./location.png";

const Form = (props) => {
  const initialState = {
    locationName: "",
    locationType: "Restaurant",
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
          placeholder="Location here"
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
          <option value="Restaurant">Restaurant</option>
          <option value="Attraction">Attraction</option>
          <option value="Landmark">Landmark</option>
        </select>
        <label htmlFor="address">Address:</label>
        <input
          placeholder="Address here"
          type="text"
          id="address"
          onChange={handleChange}
          value={formState.address}
        />
        <label htmlFor="description">Description</label>
        <textarea
          placeholder="Description here"
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
