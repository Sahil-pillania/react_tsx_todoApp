import React, { createContext, useReducer } from "react";

import "./App.css";
import Profile from "./components/Profile";
// import Todo from "./components/Todo";
import { reducer, initialState, actionType } from "./reducer";

type ctx = {
  state: typeof initialState;
  dispatch: React.Dispatch<actionType>;
};

export const userContext = createContext({} as ctx);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      {/* <Profile name="Sahil" age={10}>
        Salary: 5000
      </Profile> */}
      {/* <Todo /> */}
      <Profile />
    </userContext.Provider>
  );
}

export default App;
