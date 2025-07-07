import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { session, signUpNewUser } = UserAuth();
  const navigate = useNavigate();
  console.log(session);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signUpNewUser(email, password);

      if (result.sucess) {
        navigate("/dashboard");
      }
    } catch (error) {
      setError("an error occurred");
      console.error(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="max-w-md m-auto pt-24" onSubmit={handleSignUp}>
        <h2 className="font-bold pb-2">Sign up today!</h2>
        <p>
          Already have an account? <Link to="/signin">Sign in!</Link>
        </p>
        <div className="flex flex-col py-4">
          <input
            className="p-3 mt-6 border-2 border-blue-500"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-3 mt-6 border-2 border-blue-500"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}

          />
          <button
            className="mt-6 p-3 w-full bg-blue-500"
            type="submit"
            disabled={loading}
          >
            Signup
          </button>
          {error && <p className="text-red-600 text-center pt-4">{error}</p>}
        </div>
      </form>
    </>
  );
};

export default Signup;
