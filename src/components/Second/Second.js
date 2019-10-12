import React from 'react';
import '../First/First.css';

const Second = ({classActive, onRouteChange}) => {
    return (
        <div className='container'>
            <div className='newClass'>

            </div>
            <div className={classActive}>

            </div>
        </div>
    );
};

export default Second;