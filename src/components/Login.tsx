import { useState, type FormEvent, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { loginUser } = UserAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const result = await loginUser(email, password);

    if (!result.success) {
      setError(result.error);
      setTimeout(() => setError(null), 3000);
    } else {
      navigate("/home");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleLogin} className="w-md m-auto pt-24 p-10">
        <h2 className="font-bold pb-2">Login</h2>
        <p>
          Don't have an account yet? <Link to="/signup">Sign up</Link>
        </p>
        <div className="flex flex-col py-4">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            className="p-3 mt-2"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col py-4">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            className="p-3 mt-2"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button className="w-full mt-4 mb-10" disabled={loading}>
          Login
        </button>
        {error && <p className="text-red-600 text-center pt-4">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
