import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const login = async (credenciales) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        credenciales
      );
      setToken(response.data.token);
      setEmail(response.data.email);
    } catch (error) {
      console.error(error.response?.data?.message || "Error en el login");
    }
  };

  const register = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        userData
      );
      setToken(response.data.token);
      setEmail(response.data.email);
    } catch (error) {
      console.error(error.response?.data?.message || "Error en el registro");
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  const getUserProfile = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmail(response.data.email);
    } catch (error) {
      console.error("Error obteniendo la data del usuario", error);
    }
  };

  return (
    <UserContext.Provider value={{ token, logout, setToken, email, login, register, getUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);