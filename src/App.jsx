import { Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import Register from "./pages/Register";
import UpdatePassword from "./pages/UpdatePassword";
import "./App.css"
import Dashboard from "./components/Dashboard/Dashboard";

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
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
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
