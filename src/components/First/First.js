import React from 'react';
import './First.css';

const First = ({classActive}) => {
    return (
        <div>
            <div className='newClass1'>
            </div>
            <div className={`state1 ${classActive}`}>
            </div>
        </div>
    );
};

export default First;