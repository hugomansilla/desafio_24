import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Logout = () => {
  const { logout } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/login");
  }, [logout, navigate]);

  return (
    <div>
      <h1>Saliste</h1>
    </div>
  );
};

export default Logout;