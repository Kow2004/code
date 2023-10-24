import './App.css';
import "./signup/signup.css";
import Cards from './Cards/Cards';
import Candidates from './Candidates/Candidates';
import Signup from './signup/signup';
import Login from './Login/login';
import ContestDetailsform from './CreateChallenge/CreateChallenge';
import CreateChallenge from './CreateChallenge/CreateChallenge';
import AddEmployee from './AddEmployee/AddEmployee';
import Searchbar from './Searchbar/Searchbar';
import AddMCQ from './AddMCQ/addmcq';
import Addcodequestion from './Addcodequestion/addcodequestion';
import AddParticipant from './AddParticipants/Addparticipants';
import EditandAddQues from './EditandAddQues/EditaddQues';
import CandidateDetails from './CandidateDetails/CandidateDetails';
import Preventcopypaste from './preventcopyandpaste';
import DoughnutChart from './DoughnutChart/DoughnutChart';
import RadialBarChart from './Radial bar charts/radialbarchaers';
import ColumnbarChart from './Columnbarchart/Columnbarchart';
// import store from './store';
// import React from 'react';
// import { Provider } from 'react-redux';
// import ScreenSwitchChecker from './ScreenSwitchChecker';

// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <ScreenSwitchChecker />
//       </div>
//     </Provider>
//   );
// // }

// export default App;
import ScreenSwitchChecker from './ScreenSwitchChecker';
function App() {
  
  return (
    <div className="App">
     {/* <Cards/>
     
     <CreateChallenge/>
     <Signup/>
     <Login/> <Addcodequestion/>
      <AddEmployee/> */}
      {/* <AddMCQ/> */}
      {/* <Searchbar/> */}
      {/* <Addcodequestion/> */}
      {/* <AddParticipant/> */}
      {/* <EditandAddQues/> */}
      {/* <CandidateDetails/> */}
      {/* <Candidates/> */}
      {/* <Preventcopypaste /> */}
      {/* <DoughnutChart/> */}
      {/* <RadialBarChart/> */}
      <ColumnbarChart/>
    </div>
   
  );
}

export default App;
