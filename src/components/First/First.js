import React from 'react';
import './First.css';

const First = ({classActive, onRouteChange}) => {
    return (
        <div className='container'>
            <div className='newClass1'>
            </div>
            <div className={classActive}>
            </div>
        </div>
    );
};

export default First;