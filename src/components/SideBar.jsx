import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import {
  FaUserCircle,
  FaHome,
  FaBriefcase,
  FaClipboardCheck,
  FaTasks,
  FaBell,
  FaComments,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./SideBar.css";
import Dashboard from "./Dashboard/Dashboard";

const SideBar = () => {
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
    <div>
      {/* Contenuto della Sidebar */}
      <nav className="sidebar card">
        <ul className=" menu w-56 rounded-box" id="sidebar-menu">
          <div>
            <div>
              <FaUserCircle className="sideBar-icon" />
              <span>Nome Utente</span>
            </div>
          </div>
          <li>
            <Link to="/dashboard">
              <FaHome className="sideBar-icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/job-offer">
              <FaBriefcase className="sideBar-icon" />
              <span>Job Offer</span>
            </Link>
          </li>
          <li>
            <Link to="/project">
              <FaClipboardCheck className="sideBar-icon" />
              <span>Project</span>
            </Link>
          </li>
          <li>
            <Link to="/task-list">
              <FaTasks className="sideBar-icon" />
              <span>Task List</span>
            </Link>
          </li>
          <li>
            <Link to="/notification">
              <FaBell className="sideBar-icon" />
              <span>Notification</span>
            </Link>
          </li>
          <li>
            <Link to="/chat">
              <FaComments className="sideBar-icon" />
              <span>Chat</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <FaCog className="sideBar-icon" />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            {auth && (
              <button onClick={handleLogout}>
                <FaSignOutAlt className="sideBar-icon" />
                Logout
              </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { SideBar };
