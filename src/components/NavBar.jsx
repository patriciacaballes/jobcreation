import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { SideBar } from "./SideBar";
import logo from "../img/logo.png";
import "./NavBar.css"

const NavBar = () => {
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
    <>
      <div
        className="navbar relative lg:pt-2 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200"
        id="navbar"
      >
        {!auth && (
          <div className="flex-1 logo">
            <Link to="./" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="logo" />
            </Link>
          </div>
        )}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {/* Non Autenticato */}
            <li>{!auth && <Link to="/login">Login</Link>}</li>
            <li>{!auth && <Link to="/register">Register</Link>}</li>
            <li className="logo logo-auth">{auth && <Link to="/home">
            <img src={logo} alt="logo" />
              </Link>}</li>
          </ul>
        </div>
      </div>

      {/* Autenticato
      <ul>
        <li>{auth && <SideBar />}</li>
        <li>{auth && <Link to="/">Home</Link>}</li>
        <li>{auth && <button onClick={handleLogout}>LogOut</button>}</li>
      </ul> */}
    </>
  );
};

export default NavBar;
