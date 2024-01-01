import './App.css';
import {BrowserRouter,Routes,Route}from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import MyAccount from './Pages/MyAccount';
import Checkout from './Pages/Checkout';
import Contact from './Pages/Contact';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/account' element={<MyAccount/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Home/>
    //   {/* <About/> */}
    // </div>
  );
}

export default App;
