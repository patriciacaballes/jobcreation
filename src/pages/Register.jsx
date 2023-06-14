import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase/client";

const Register = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

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
      <div>
        <div>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div id="email">
              <label>Email</label>
              <input type="email" ref={emailRef} required />
            </div>
            <div id="password">
              <label>Password</label>
              <input type="password" ref={passwordRef} required />
            </div>
            <div id="confirm-password">
              <label>Confirm Password</label>
              <input type="password" ref={confirmPasswordRef} required />
            </div>
            {errorMsg && (
              <div
                variant="danger"
                onClose={() => setErrorMsg("")}
                dismissible>
                {errorMsg}
              </div>
            )}
            {msg && (
              <div variant="success" onClose={() => setMsg("")} dismissible>
                {msg}
              </div>
            )}
            <div>
              <button disabled={loading} type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        Already a User? <Link to={"/login"}>Login</Link>
      </div>
    </>
  );
};

export default Register;
