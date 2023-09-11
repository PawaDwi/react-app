import React from "react";
import "./App.css";
import DataListing from "./components/DataList";


function App() {
  return (
    <div className="App">
      <h1>Data Management</h1>
      {/* <AddData /> */}
      <DataListing />
    </div>
  );
}

export default App;
