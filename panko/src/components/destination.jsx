import { useState } from "react";
import axios from "axios";
import LocationImg from "./location.png";

const Destination = (props) => {
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

        <button className="form-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Destination;
