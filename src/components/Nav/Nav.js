import React from 'react';
import "./Nav.css";

const Nav = ({onRouteChange, setClassActive, wasClicked, setWasClicked, setFinishedLoading1, setFinishedLoading2}) => {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p className='nav grow' onClick={() => {onRouteChange('first');
          if (wasClicked) {
              setClassActive('state3');
              setFinishedLoading1(false);
          }
          setWasClicked(true);
          }}>Home</p>
          <p className='nav grow' onClick={() => {onRouteChange('second');
          setWasClicked(true);
          setFinishedLoading2(false);
          }}>Tables</p>
      </nav>
    );
};

export default Nav;