import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <h1 className="text-center text-3xl pt-4">Supabase Auth & Context</h1>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  </StrictMode>
);