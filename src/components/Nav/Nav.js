import React from 'react';
import "./Nav.css";

const Nav = ({onRouteChange, setClassActive, wasClicked, setWasClicked}) => {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p className='nav grow' onClick={() => {onRouteChange('first');
          if (wasClicked) {
              setClassActive('state3');
          }
          setWasClicked(true);
          }}>Home</p>
          <p className='nav grow' onClick={() => {onRouteChange('second');
          }}>Tables</p>
      </nav>
    );
};

export default Nav;