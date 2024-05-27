"use client";
import { LoginType } from "@/types/LoginType";
import { RegisterType } from "@/types/RegisterType";
import { Role } from "@/types/Role";
import { UserType } from "@/types/UserType";
import { signOut, useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

type contextAuth = {
  login: (user: LoginType) => any;
  signUp: (user: RegisterType) => void;
  logout: () => void;
  user: UserType | null;
  isAuthenticated: boolean;
  loading: boolean;
  errors: string | null;
  signInWithGoogle: (body: any) => void;
};

type Props = {
  children: React.ReactNode;
};

export const authContext = createContext<contextAuth | null>(null);

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);
  const { data: session } = useSession();

  const login = async (user: LoginType) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?email=${user.username}`
      );
      const data = await res.json();
      if (data.length > 0) {
        const myUser = {
          ...data[0],
          role: Role.USER,
        };
        if (myUser.id === 1) {
          myUser.role = Role.ADMIN;
          setUser(myUser);
        }
        setUser(myUser);
        setIsAuthenticated(true);
      }
      return data[0];
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async (user: RegisterType) => {
    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      setUser(data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    await signOut({ redirect: false }).then(() => {
      setUser(null);
      setIsAuthenticated(false);
    });
  };

  const signInWithGoogle = async (body: any) => {
    try {
      const res = await registerGoogleRequest(body);
      setUser(res.data.user);
      //dispatch(setProfileUser(res.data.user));
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userName", res.data.user.userName);
      localStorage.setItem("profileImage", res.data.user.profileImage);
      setIsAuthenticated(true);
      return res;
    } catch (error: any) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  useEffect(() => {
    if (session) {
      setUser({ ...session.user, role: Role.USER });
      setIsAuthenticated(true);
    }
  }, [session]);

  const value = {
    login,
    signUp,
    logout,
    user,
    isAuthenticated,
    loading,
    errors,
    signInWithGoogle,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
