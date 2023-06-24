import React from "react";
import { useAuth } from "../../context/AuthProvider";
import { SideBar } from "../SideBar";
import BottomBar from "../BottomBar";
// Chat

const Chat = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="layout">
        <div id="sidebar">
          <SideBar />
        </div>
        <div id="chat">
        <h1>
          Work in progress
          we apologise for any inconvenience caused
          </h1>
        </div>
      </div>
      <div className="bottom-bar">
        <BottomBar />
      </div>
    </>
  );
};

export default Chat;
