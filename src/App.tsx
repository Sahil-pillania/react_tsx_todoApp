import React from "react";

import "./App.css";
import Profile from "./components/Profile";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      {/* <Profile name="Sahil" age={10}>
        Salary: 5000
      </Profile> */}
      <Todo />
    </div>
  );
}

export default App;
