// ScreenSwitchChecker.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import store from './store'; // Import the Redux store

const ScreenSwitchChecker = ({ screenSwitchCount, incrementScreenSwitch }) => {

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {  
        incrementScreenSwitch();
        // localStorage.setItem('nofswitchscreen', JSON.stringify(screenSwitchCount) );
        // const storedData = JSON.parse(localStorage.getItem('nofswitchscreen'));
        // console.log(storedData+1)  ;
        console.log(`Screen switch count: ${screenSwitchCount + 1}`);
      }
    };
  document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [incrementScreenSwitch, screenSwitchCount]);

    return <div>ScreenSwitchChecker Component</div>;
};



const mapStateToProps = (state) => ({
  screenSwitchCount: state.yourReducerName.screenSwitchCount,
});


const mapDispatchToProps = {
  incrementScreenSwitch: () => ({ type: 'INCREMENT_SCREEN_SWITCH' }),
};


export default connect(mapStateToProps, mapDispatchToProps)(ScreenSwitchChecker);
