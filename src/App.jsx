// import logo from './logo.svg';
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login"
import Register from "./Pages/Register";
import Verify_account from "./Pages/Verify_account";
import Otp_verification from "./Pages/Otp_verification";
import Forgot_password from "./Pages/Forgot_password";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Transactions from './Pages/Dashboard/Transactions';
import Profile from './Pages/Dashboard/Profile';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Verify_account" element={<Verify_account />} />
          <Route path="/Otp_verification" element={<Otp_verification />} />
          <Route path="/Forgot_password" element={<Forgot_password />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Transactions" element={<Transactions />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
