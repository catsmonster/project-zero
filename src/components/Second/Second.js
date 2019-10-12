import React from 'react';
import '../First/First.css';

const Second = ({classActive}) => {
    return (
        <div>
            <div className='newClass'>
            </div>
            <div className={classActive}>
            </div>
        </div>
    );
};

export default Second;