import React from "react";
import "./App.css";
import "./sass/index.scss";

import Header from "./components/Header";
import Grid from "./components/Grid";
import Rules from "./components/Rules";

function App() {
  return (
    <div className="App-header">
      <Header />
      <Grid />
      <Rules />
    </div>
  );
}

export default App;
