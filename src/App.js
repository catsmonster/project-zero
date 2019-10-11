import React, {useState} from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import 'tachyons';
import First from "./components/First/First";
import Second from "./components/Second/Second";

function App() {

  const [route, setRoute] = useState("first");

  const onRouteChange = (route) => {

    setRoute(route);
  };

  return (
    <div className="App">
      <Nav onRouteChange={onRouteChange}/>
      {route === 'first' ?
      <First onRouteChange={onRouteChange}/>
      :
      <Second onRouteChange={onRouteChange}/>
      }
    </div>
  );
}

export default App;
