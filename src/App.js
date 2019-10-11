import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import 'tachyons';
import First from "./components/First/First";
import Second from "./components/Second/Second";

function App() {
  return (
    <div className="App">
      <Nav/>
      <First/>
      <Second/>
    </div>
  );
}

export default App;
