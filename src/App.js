import logo from './logo.svg';
import './App.css';
import Login from './Screens/AuthScreen/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './Screens/Registration';
import Otp from './Screens/AuthScreen/Otp';
import Products from './Screens/ProductScreen/Products';
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="/Products" element={<Products/>} />
      <Route path="/otp" element={<Otp/>} />
       <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
