import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import "./BottomBar.css";
import {
  FaUserCircle,
  FaHome,
  FaBriefcase,
  FaClipboardCheck,
  FaBell,
  FaComments,
  FaCog,
  FaSignOutAlt,
  FaTasks,
} from "react-icons/fa";

export default function BottomBar() {
  const { auth, signOut } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { error } = await signOut();
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bottom-bar" id="bottom-bar">
      <ul className="menu menu-horizontal rounded-box ">
        <li>
          <Link to="/dashboard" className="bottomBar-icon">
            <FaHome />
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/job-offer">
            <FaBriefcase className="bottomBar-icon" />
          </Link>
        </li>
        <li>
          <Link to="/project">
            <FaClipboardCheck className="bottomBar-icon" />
          </Link>
        </li>
        <li>
          <Link to="/task-list">
            <FaTasks className="bottomBar-icon" />
          </Link>
        </li>
        <li>
          <Link to="/chat">
            <FaComments className="bottomBar-icon" />
          </Link>
        </li>
        <li>
          {auth && (
            <button onClick={handleLogout}>
              <FaSignOutAlt className="bottomBar-icon" />
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
