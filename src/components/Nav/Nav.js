import React from 'react';
import "./Nav.css";

const Nav = ({onRouteChange}) => {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p className='nav' onClick={() => onRouteChange('first')}>option 1</p>
          <p className='nav' onClick={() => onRouteChange('second')}>option 2</p>
      </nav>
    );
};

export default Nav;