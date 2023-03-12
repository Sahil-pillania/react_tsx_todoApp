import React, { useContext } from "react";
import { userContext } from "../App";

const Profile: React.FC = () => {
  const { state, dispatch } = useContext(userContext);
  return (
    <div>
      <h1>Name: {state.name}</h1>
      <h1>Age: {state.age}</h1>
      <button
        onClick={() =>
          dispatch({ type: "CHANGE_NAME", payload: "Sahil Pillania" })
        }
      >
        Update Name{" "}
      </button>
      <button onClick={() => dispatch({ type: "CHANGE_AGE", payload: 21 })}>
        Update age{" "}
      </button>
    </div>
  );
};

export default Profile;
