import React from "react";
import "./sass/app.scss";

import Header from "./components/Header";
import Grid from "./components/Grid";
import Rules from "./components/Rules";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Grid />
        <Rules />
      </main>
      <About />
    </div>
  );
}

export default App;
