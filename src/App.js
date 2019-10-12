import React, {useState} from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import 'tachyons';
import First from "./components/First/First";
import Second from "./components/Second/Second";

function App() {

  const [route, setRoute] = useState("first");

  const [classActive, setClassActive] = useState('state1');


  const onRouteChange = (route) => {
    setRoute(route);
  };


  return (
    <div className='App'>
      <Nav setClassActive={setClassActive} onRouteChange={onRouteChange}/>
      {route === 'first' ?
          <First classActive={classActive}/>
      :
          <Second classActive={classActive}/>
      }
    </div>
  );
}

export default App;
