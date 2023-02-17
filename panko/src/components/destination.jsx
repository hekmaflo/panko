import { useState } from "react";
import axios from "axios";

const Destination = (props) => {
  const initialState = {
    cityName: "",
  };

  const [formState, setFormState] = useState(initialState);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:3001/cities", formState);

    setFormState(initialState);
    props.getLocations();
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  return (
    <div>
      <form className="Form" onSubmit={handleSubmit}>
        <label htmlFor="cityName"></label>
        <input
          placeholder="Whats your destination?"
          type="text"
          id="cityName"
          onChange={handleChange}
          value={formState.cityName}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Destination;
