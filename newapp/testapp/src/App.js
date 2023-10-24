import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    axios('http://localhost:5050/api/call/student/')
      .then(res => console.log(res, 'res'))
      .catch(err => console.log(err, 'err'))
  }, [])
  return (
    <div className="App">
      hello kowsalya
    </div>
  );
}

export default App;
