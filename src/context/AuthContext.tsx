import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { supabase } from "../supabaseClient";

interface AuthContextType {
  session: string | undefined;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [session, setSession] = useState<string | undefined>(undefined);

  // Sign up

  const signUpNewUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.error("there was a problem signing up:", error);
      return { sucess: false, error };
    }
    return { sucess: true, data };
  };

  // Log in

  const signInUser = async ( email, password ) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        console.error("sign in error occurred: ", error);
        return { sucess: false, error: error.message };
      }

      console.log("sign-in sucess: ", data);
      return { sucess: true, data };
    } catch (error) {
      console.error("an error occurred: ", error);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  // Sign out

  const signOut = () => {
    const { error } = supabase.auth.signOut();
    if (error) {
      console.log("there was an error:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ session, signUpNewUser, signInUser, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
