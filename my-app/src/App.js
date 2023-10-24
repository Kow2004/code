import React from 'react';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import './App.css';
import Signin from './Components/login';
import Signup from './Components/signup';
import Home from './Components/Home';

const App=()=>{
  // const navigate=useNavigate();
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/Home" element={<Home/>}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
