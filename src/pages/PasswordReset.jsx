import { useRef, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

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
c    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <>
      <div>
        <div>
          <h2>Reset Password</h2>
          <form onSubmit={handleSubmit}>
            <form id="email">
              <label>Email</label>
              <input type="email" ref={emailRef} required />
            </form>
            {msg && (
              <div variant="success" onClose={() => setMsg("")} dismissible>
                {msg}
              </div>
            )}
            <div>
              <button disabled={loading} type="submit">
                Send Reset Link
              </button>
            </div>
          </form>
        </div>
        <div>
          Back to Login? <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
