import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

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
    <nav>
      <ul>
        <li>
          {!auth && (
            <Link to="/login">Login</Link>
          )}
        </li>
        <li>
          {!auth && (
            <Link to="/register">Register</Link>
          )}
        </li>
        <li>
          {auth && (
            <Link to="/">Home</Link>
          )}
        </li>
        <li>
          {auth && (
            <button onClick={handleLogout}>LogOut</button>
          )}
        </li>
      </ul>
    </nav>
  );
};


export default NavBar;
