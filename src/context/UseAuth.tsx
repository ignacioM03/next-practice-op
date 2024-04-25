"use client";
import { LoginType } from "@/types/LoginType";
import { RegisterType } from "@/types/RegisterType";
import { UserType } from "@/types/UserType";
import { createContext, useContext, useState } from "react";

type contextAuth = {
  login: (user: LoginType) => void;
  register: (user: RegisterType) => void;
  logout: () => void;
  user: UserType | null;
  isAuthenticated: boolean;
  loading: boolean;
  errors: string | null;
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

  const login = async (user: LoginType) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?email=${user.username}`
      );
      const data = await res.json();
      if (data.length > 0) {
        const myUser = {
          ...data[0],
          role: data[0].id % 2 === 0 ? "user" : "admin",
        };
        setUser(myUser);
        setIsAuthenticated(true);
      }
      return data[0];
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (user: RegisterType) => {
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

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    login,
    register,
    logout,
    user,
    isAuthenticated,
    loading,
    errors,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
