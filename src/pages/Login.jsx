import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import "./pages.css";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      if (!passwordRef.current?.value || !emailRef.current?.value) {
        setErrorMsg("Please fill in the fields");
        return;
      }
      const {
        data: { user, session },
        error,
      } = await login(emailRef.current.value, passwordRef.current.value);
      if (error) setErrorMsg(error.message);
      if (user && session) navigate("/");
    } catch (error) {
      setErrorMsg("Email or Password Incorrect");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="login relative flex flex-1 flex-col overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
        <div
          className="flex flex-1 flex-col items-center justify-center pb-16 pt-12"
          id="login-form"
        >
          <h2 className="text-2xl font-bold ">Welcome Back</h2>
          <h3 className="text-s pb-8">Please Enter your details</h3>

          {/* Form */}
          <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <div className="form-login flex flex-col mb-6">
              <div id="email">
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  ref={emailRef}
                  className=" label-text mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 ring-1 ring-slate-200"
                  required
                />
              </div>
              <div id="password">
                <label className="block">Password</label>
                <input
                  type="password"
                  ref={passwordRef}
                  className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 ring-1 ring-slate-200"
                  required
                />
              </div>
            </div>

            {errorMsg && (
              <div variant="danger" onClose={() => setErrorMsg("")} dismissible>
                {errorMsg}
              </div>
            )}

            <div>
              <button
                disabled={loading}
                className=" submit btn btn-primary inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-white hover:bg-slate-700 w-full"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-sm hover:underline flex  mt-5 ">
            <p>
              {" "}
              New User? <Link to={"/register"}>Register</Link>
            </p>
          </div>
          <div className="text-sm hover:underline flex text-center">
            <p>
              Forgot Password? <Link to={"/passwordreset"}> Click Here</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
