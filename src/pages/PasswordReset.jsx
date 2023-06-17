import { useRef, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import "./pages.css";

const PasswordReset = () => {
  const { passwordReset } = useAuth();
  const emailRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await passwordReset(emailRef.current.value);
      if (!error) {
        setMsg("Password reset has been sent to your email");
      }
      c;
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="reset-password relative flex flex-1 flex-col overflow-hidden px-4 py-8 sm:px-6 lg:px-8 ">
        <div className="flex flex-1 flex-col items-center justify-center" id="reset-form">
          <h2 className="text-2xl font-bold ">Reset Password</h2>
          <h3 className="send-pass text-s pb-2 text-center ">
            We will send you a password reset link connected to your existing account
          </h3>
          <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <div className="form-login flex flex-col mb-6">
              <label className="block text-sm font-semibold leading-6 text-gray-900" id="email">
                Email
              </label>
              <input
                type="email"
                ref={emailRef}
                className="label-text mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 ring-1 ring-slate-200"
                required
              />
            </div>
            {msg && (
              <div variant="success" onClose={() => setMsg("")} dismissible>
                {msg}
              </div>
            )}
            <div>
              <button
                disabled={loading}
                className="submit btn btn-primary inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-white hover:bg-slate-700 w-full"
                type="submit"
              >
                Send Reset Link
              </button>
            </div>
            <div className="text-center back-login hover:underline">
          Back to Login? <Link to={"/login"}>Login</Link>
        </div>
          </form>

        </div>
        
      </div>
    </>
  );
};

export default PasswordReset;
