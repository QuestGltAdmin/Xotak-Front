import React, { useEffect } from "react";
import AdminHeader from "./AdminHeader";
import { logout } from "../store/reducers/authReducer";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import useAuth from "../hooks/useAuth";

function AdminLayout(props) {
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
        navigate("/auth-admin-login");
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
        <AdminHeader />
        {props.children}
      </div>
    </div>
  );
}

export default AdminLayout;
