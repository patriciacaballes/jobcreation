import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase/client";
import "./pages.css";

const Register = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // Terms
  const [termsChecked, setTermsChecked] = useState(false);
  const [emailUpdatesChecked, setEmailUpdatesChecked] = useState(false);

  const register = (email, password) =>
    supabase.auth.signUp({ email, password });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !passwordRef.current?.value ||
      !emailRef.current?.value ||
      !confirmPasswordRef.current?.value
    ) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords doesn't match");
      return;
    }
    try {
      setErrorMsg("");
      setLoading(true);
      const { data, error } = await register(
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(data);
      console.log(error);
      if (!error && data) {
        setMsg(
          "Registration Successful. Check your email to confirm your account"
        );
      }
    } catch (error) {
      setErrorMsg("Error in Creating Account");
    }
    setLoading(false);
  };

  return (
    <>
      {/* REGISTER */}
      <div className="login relative flex flex-1 flex-col overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
        <div
          className="flex flex-1 flex-col items-center justify-center pb-2 pt-0"
          id="login-form"
        >
          <h2 className="text-2xl font-bold ">Create your Account</h2>
          <h3 className="text-s pb-2">Please Enter your details</h3>

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
              <div id="confirm-password">
                <label className="block">Repeat Password</label>
                <input
                  type="password"
                  ref={confirmPasswordRef}
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
            {msg && (
              <div variant="success" onClose={() => setMsg("")} dismissible>
                {msg}
              </div>
            )}
            <div>
              <div className="text-sm hover:underline flex">
                <input
                  type="checkbox"
                  checked={termsChecked}
                  onChange={() => setTermsChecked(!termsChecked)}
                  className="checkbox checkbox-xs"
                />
                <p>Accept Terms and Conditions</p>
              </div>
              <div className="text-sm hover:underline flex">
                <input
                  type="checkbox"
                  checked={emailUpdatesChecked}
                  onChange={() => setEmailUpdatesChecked(!emailUpdatesChecked)}
                  className="checkbox checkbox-xs "
                />
                <p>
                  {" "}
                  Yes,I’d love to recive emails with great content and updates.
                </p>
              </div>
              <button
                disabled={loading}
                className="submit mt-2 btn btn-primary inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-white hover:bg-slate-700 w-full"
                type="submit"
              >
                Create an Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
