import React from 'react';
import './First.css';

const First = ({classActive, wasClicked}) => {
    return (
        <div>
            {wasClicked ?
                <div>
                    <div>
                        <div className='fog2'>
                        </div>
                        <div className='fog'>
                        </div>
                    </div>
                    <div>
                        <div className='newClass1'>
                        </div>
                        <div className={`state1 ${classActive}`}>
                        </div>
                    </div>
                </div> :
                <div>
                    <div className='newClass1'>
                    </div>
                    <div className={`state1 ${classActive}`}>
                    </div>
                </div>
            }
        </div>
    );
};

export default First;