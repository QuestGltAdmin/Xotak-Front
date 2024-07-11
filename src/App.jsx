// import logo from './logo.svg';
import "./App.css";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";
import Otp_verification from "./Pages/Otp_verification";
import Forgot_password from "./Pages/Forgot_password";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Transactions from "./Pages/Dashboard/Transactions";
import Profile from "./Pages/Dashboard/Profile";
import { Buycoin } from "./Pages/Dashboard/Buycoin";
import { BuycoinTwo } from "./Pages/Dashboard/BuycoinTwo";
import UserPrivateRoute from "./PrivateRoute/UserPrivateRoute";
import { Homepage } from "./Pages/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
           <Route path="/home" element={<Homepage />} />
          {/* Auth */}
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/Otp_verification" element={<Otp_verification />} />
          <Route path="/Forgot_password" element={<Forgot_password />} />
          {/* Auth end */}

          <Route
            path="/Dashboard"
            element={
              <UserPrivateRoute>
                <Dashboard />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/Transactions"
            element={
              <UserPrivateRoute>
                <Transactions />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/Profile"
            element={
              <UserPrivateRoute>
                <Profile />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/buy-coin"
            element={
              <UserPrivateRoute>
                <Buycoin />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/buy-coin-token"
            element={
              <UserPrivateRoute>
                <BuycoinTwo />
              </UserPrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
