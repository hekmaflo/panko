import { useState } from "react";
import axios from "axios";

const Destination = (props) => {
  const initialState = {
    cityName: "",
  };

  const [formState, setFormState] = useState(initialState);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.put(
      `http://localhost:3001/cities/${props.selectedCity._id}`,
      formState
    );

    setFormState(initialState);
    props.getDestinations();
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  return (
    <div>
      <form className="Form-destination" onSubmit={handleSubmit}>
        <label htmlFor="cityName"></label>
        <input
          placeholder="Whats your destination?"
          type="text"
          id="cityName"
          onChange={handleChange}
          value={formState.cityName}
          className="destination-form"
        />

        <button className="form-btn-destination " type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Destination;
