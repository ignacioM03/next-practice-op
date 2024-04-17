"use client";

import { LoginType } from "@/types/LoginType";
import { UserType } from "@/types/UserType";
import { createContext, useContext, useState } from "react";

type ContextProps = {
  user: UserType | null;
  login: (user: LoginType) => void;
  logout: () => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
};

type Props = {
  children: React.ReactNode;
};

const AuthContext = createContext<ContextProps | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (user: LoginType) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?email=${user.username}`
      );
      const data = await res.json();
      if (data.length > 0) {
        setUser(data[0]);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const values = {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
    login,
    logout,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
