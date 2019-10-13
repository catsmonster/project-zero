import React, {useState} from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import 'tachyons';
import First from "./components/First/First";
import Second from "./components/Second/Second";

function App() {

  const [route, setRoute] = useState("first");

  const [classActive, setClassActive] = useState('state1');

  const [wasClicked, setWasClicked] = useState(false);

  const [finishedLoading1, setFinishedLoading1] = useState(false);

  const [finishedLoading2, setFinishedLoading2] = useState(false);

  const onRouteChange = (route) => {
    setRoute(route);
  };


  return (
    <div className='App'>
      <Nav setFinishedLoading1={setFinishedLoading1} setFinishedLoading2={setFinishedLoading2} setWasClicked={setWasClicked} wasClicked={wasClicked} setClassActive={setClassActive} onRouteChange={onRouteChange}/>
      {route === 'first'?
          <First setFinishedLoading1={setFinishedLoading1} finishedLoading1={finishedLoading1} wasClicked={wasClicked} classActive={classActive}/>
      :
          <Second setFinishedLoading2={setFinishedLoading2} finishedLoading2={finishedLoading2} />
      }
    </div>
  );
}

export default App;
