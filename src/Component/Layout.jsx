import React, { useEffect } from "react";
import Header from "./Header";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import jwt from "jsonwebtoken";
import { logout } from "../store/reducers/authReducer";
import { jwtDecode } from "jwt-decode";

function Layout(props) {
  const { user } = useAuth();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const verifyTokenSignature = () => {
    try {
      let newDate = new Date();
      newDate = newDate.toISOString();
      const token = user.token;
      const decoded = jwtDecode(token);
      const date = new Date(decoded?.exp * 1000);
      const isoString = date.toISOString();
      if (newDate > isoString) {
        dispatch(logout());
        navigate("/login");
      }
    } catch (error) {
    console.log(error);
    }
  };

  useEffect(() => {
    verifyTokenSignature();
  }, [location]);
  return (
    <div className="dashboard-layout">
      <div className="inner-dash-bpx">
        <Header />
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
