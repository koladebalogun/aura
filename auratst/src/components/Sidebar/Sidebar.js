import React, { useEffect, useState } from "react";

import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineCustomerService, AiOutlineSetting } from "react-icons/ai";
import { TbReportSearch, TbDeviceDesktopAnalytics } from "react-icons/tb";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";

import decode from "jwt-decode"; //***************** */

import './sidebar.css'

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile"))); //Here, we are retrieving the user data ('profile') set in the local storage

  console.log(user);

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    navigate("/");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token; // we're checking if token exist and if it does, we are sending it to the token variable

    //checking to see if the token has expired so we can log the user out
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  return (
    <div className="sidebar">
      <div className="sidebar_list">
        <ul>
          <div className="Logo">
            <h3>Logo</h3>
          </div>
          <li>
            <HiOutlineHome className="icons" /> Home
          </li>
          <li>
            <BsPersonCircle className="icons" /> Visitors
          </li>
          <li>
            <TbDeviceDesktopAnalytics className="icons" /> Analytics
          </li>
          <li>
            <AiOutlineCustomerService className="icons" />
            Service
          </li>
          <li>
            <TbReportSearch className="icons" />
            Reports
          </li>
          <li>
            <FaRegMoneyBillAlt className="icons" />
            Billings
          </li>
          <li>
            <AiOutlineSetting className="icons" />
            Settings
          </li>
          <div className="userInfo">
            <hr />
            <div>
              {user ? (
                <>
                  <div className="userInfo_inner">
                    <div className="username-char">{user.result.name.charAt(0)}</div>
                    <p className="username">{user.result.name}</p>
                  </div>
                  <button onClick={logout} className="logout">Log Out</button>
                </>
              ) : (
                
                <button className="logout">Sign In</button>
              )}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
