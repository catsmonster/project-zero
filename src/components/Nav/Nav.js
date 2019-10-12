import React from 'react';
import "./Nav.css";

const Nav = ({onRouteChange, setClassActive}) => {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p className='nav' onClick={() => {onRouteChange('first');
          setClassActive('state3');
          }}>option 1</p>
          <p className='nav' onClick={() => {onRouteChange('second');
          setClassActive('state2');
          }}>option 2</p>
      </nav>
    );
};

export default Nav;