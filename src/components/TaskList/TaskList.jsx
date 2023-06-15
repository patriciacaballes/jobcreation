import React from "react";
import { useAuth } from "../../context/AuthProvider"
import { SideBar } from "../SideBar";
import BottomBar from "../BottomBar";
import "./TaskList.css"
// Dashboard

const TaskList = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="layout" >
        <div id="sidebar">
          <SideBar />
        </div>
        <div id="taskList">TaskList</div>
      </div>
      <div className="bottom-bar">
        <BottomBar />
      </div>
    </>
  );
};

export default TaskList;
