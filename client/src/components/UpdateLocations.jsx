import { useState } from "react";
import axios from "axios";
import EditImg from "./edit.png";

const UpdateForm = (props) => {
  const initialState = {
    locationName: "",
    locationType: "Restaurant",
    address: "",
    description: "",
  };

  //   const oldState = {
  //     locationName: props.locationName,
  //     locationType: props.locationtype,
  //     address: props.address,
  //     description: props.description,
  //   };

  const [formState, setFormState] = useState(initialState);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.put(`/locations/${props.selectedLocation._id}`, formState);

    setFormState(initialState);
    props.getLocations();
    props.handleToggleOff();
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  //   const setPriorState = () => {
  //     console.log(oldState);
  //   };

  //   setPriorState();

  return (
    <div className="Form-div2">
      {/* <h2>{props.locationName}</h2> */}
      <img className="icon" src={EditImg} alt="edit" />
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
          <option value="Restaurant">Restaurant</option>
          <option value="Attraction">Attraction</option>
          <option value="Landmark">Landmark</option>
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
          Update
        </button>
      </form>
    </div>
  );
};
export default UpdateForm;
