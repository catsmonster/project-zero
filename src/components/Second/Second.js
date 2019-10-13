import React from 'react';
import '../First/First.css';

const Second = ({finishedLoading2, setFinishedLoading2, route}) => {
    const showFog2 = () => {
        if (!finishedLoading2 || route !=='first') {
            setTimeout(hideFog, 2000);
            return (
                <div>
                    <div className={`fog4`}>
                    </div>
                    <div className={`fog3`}>
                    </div>
                </div>
            );
        }
    };

    const hideFog = () => {
      setFinishedLoading2(true);
    };

    return (
        <div>
            {showFog2()}
            <div className='newClass'>
            </div>
            <div className='state2'>
            </div>
        </div>
    );
};

export default Second;