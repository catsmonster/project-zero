import React from 'react';
import './First.css';

const First = ({classActive, wasClicked, finishedLoading1, setFinishedLoading1}) => {

    const addNewClassDiv = () => {
        if (!finishedLoading1 && wasClicked) {
            return (
                <div className='newClass1'>
                </div>
            );
        }
    };

    const setFirstState = () => {
        return (
            <div>
                {addNewClassDiv()}
                <div className={`state1 ${classActive}`}>
                    <p>this is a paragraph on the fist page</p>
                </div>
            </div>
        );
    };

    const showFog1 = () => {
        if (!finishedLoading1) {
            setTimeout(hideFog, 1500);
            return (
                <div>
                    <div className={`fog2`}>
                    </div>
                    <div className={`fog`}>
                    </div>
                </div>
            );
        }
    };

    const hideFog = () => {
        setFinishedLoading1(true);
    };

    const renderWithFog = () => {
      if (wasClicked) {
          return (
              <div>
                  {showFog1()}
                  {setFirstState()}
              </div>
          );
      } else {
          return (
          setFirstState()
      );
      }
    };

    return (
            renderWithFog()
    );
};

export default First;