import  ResponsiveAppBar from "./components/navbar";
import FilterBar from "./components/filter-bar";
import React from "react";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <FilterBar />
      <header>
        <p>Welcome on jobFever!</p>
      </header>

    </div>
  );
}

export default App;
