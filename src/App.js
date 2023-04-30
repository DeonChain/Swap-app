
import './App.css';
import Swap from './Swap';
import Wallet from './Wallet';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar';
import HomePage from './Homepage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} > </Route>
        <Route path="/wallet" element={<Wallet/>}></Route>
        <Route path="/trade" element={<Swap/>}></Route>
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
