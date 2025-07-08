import Login from "./components/Login";

import { UserAuth } from "./context/AuthContext";

function App() {
  const { user } = UserAuth();

  return (
    <>
      <Login />
    </>
  );
}

export default App;