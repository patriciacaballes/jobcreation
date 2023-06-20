import { Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import NavBar from "./components/NavBar";
// import Home from "./pages/Home";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import Register from "./pages/Register";
import UpdatePassword from "./pages/UpdatePassword";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import JobOffer from "./components/JobOffer/JobOffer";
import TaskList from "./components/TaskList/TaskList";
import Settings from "./components/Settings/Settings";
import Project from "./components/Project/Project";
import Notification from "./components/Notification/Notification";
import Chat from "./components/Chat/Chat";
import DashProject from "./components/Dashboard/DashProject/DashProject";
import JobInformation from "./components/JobOffer/JobInformation/JobInformation";
import AddJob from "./components/JobOffer/AddJob/AddJob";

const App = () => {
  return (
    <>
      <div id="app">
        <NavBar />
        <div>
          <Routes>
            {/* <Route element={<Home/>}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route> */}
            <Route element={<AuthRoute />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="/dashboard-project" element={<DashProject />} />
              </Route>
              <Route path="/:id" element={<JobInformation />} />
              <Route path="/job-offer" element={<JobOffer />} />
              <Route path="/project" element={<Project />} />
              <Route path="/task-list" element={<TaskList />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/add-job" element={<AddJob />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/passwordreset" element={<PasswordReset />} />
            <Route path="/update-password" element={<UpdatePassword />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
