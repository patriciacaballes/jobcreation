import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import {
  FaUserCircle,
  FaHome,
  FaBriefcase,
  FaClipboardCheck,
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
        <ul className=" menu bg-base-200 w-56 rounded-box" id="sidebar-menu">
          <div>
          <div>
            <FaUserCircle />
            <span>Nome Utente</span>
          </div>
        </div>       
          <li>
            <Link to="/dashboard">
              <FaHome />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/job-offer">
              <FaBriefcase />
              <span>Job Offer</span>
            </Link>
          </li>
          <li>
            <Link to="/project">
              <FaClipboardCheck />
              <span>Project</span>
            </Link>
          </li>
          <li>
            <Link to="/task-list">
              <FaClipboardCheck />
              <span>Task List</span>
            </Link>
          </li>
          <li>
            <Link to="/notification">
              <FaBell />
              <span>Notification</span>
            </Link>
          </li>
          <li>
            <Link to="/chat">
              <FaComments />
              <span>Chat</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <FaCog />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            {auth && (
              <button onClick={handleLogout}>
                <FaSignOutAlt />
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
