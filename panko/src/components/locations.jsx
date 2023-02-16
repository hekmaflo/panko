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
    <div className="Form-div">
      <form className="Form" onSubmit={handleSubmit}>
        <label htmlFor="LocationName">Location:</label>
        <input
          placeholder="your location here"
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
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default Form;
