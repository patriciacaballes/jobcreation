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
  <>
    <div className="navbar relative lg:pt-2 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
    <div className="flex-1"><Link to="./"  Link to="./" className="btn btn-ghost normal-case text-xl">Job Creation</Link></div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">    

        {/* Non Autenticato */}
        <li>{!auth && (<Link to="/login">Login</Link>)}</li>
        <li>{!auth && (<Link to="/register">Register</Link>)}</li>
        
        {/* Autenticato */}
        <li>{auth && (<Link to="/">Home</Link>)}</li>
        <li>{auth && (<button onClick={handleLogout}>LogOut</button>)}</li>

      </ul>
    </div>
  </div>
 </>
  );
};


export default NavBar;
