import React from "react";
import WelcomePage from "./components/welcomePage/WelcomePage";
import ResponsiveAppBar from "./components/navbar";
import FilterBar from "./components/filter-bar";
import LoginSheet from './components/login/LoginSheet';
import Register from "./components/login/Register";

function App() {
  return (
    <div>
      <Register />
      {/*  <LoginSheet/>*/}
    </div>
  );
}

export default App;
