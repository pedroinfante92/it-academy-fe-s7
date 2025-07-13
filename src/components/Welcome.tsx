import { Link } from "react-router-dom";

const Welcome = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-white">
    <h1 className="text-4xl font-bold mb-6">Welcome to Movies App!</h1>
    <div className="flex gap-4">
      <Link to="/home" className="border-2 p-3 rounded-2xl">
        Go to movies
      </Link>
    </div>
  </div>
);

export default Welcome;
