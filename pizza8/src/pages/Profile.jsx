// import React from 'react'

// const Profile = ({ email, onLogout }) => {
//     return (
//       <div style={{ padding: '20px', textAlign: 'center' }}>
//         <h2>Hola {email}</h2>
//         <button 
//           onClick={onLogout} 
//           style={{
//             padding: '10px 20px',
//             marginTop: '20px',
//             backgroundColor: '#ff4d4d',
//             color: 'white',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer'
//           }}
//         >
//           Logout
//         </button>
//       </div>
//     );
//   };

// export default Profile




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Profile = () => {
  const { token, logout, email, getUserProfile } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }else{
      getUserProfile();
    }
  }, [token, navigate, getUserProfile]);

  const cerrarSesion = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="vh-100 bg-secondary d-flex justify-content-center align-items-center">
      <div className="border border-warning border-3 rounded p-3">
        <div className="bg-white p-5 rounded shadow">
          <h1 className="mb-5">Tu Perfil</h1>
          <div className="datos-perfil">
            <img
              className="imag-random w-25 rounded border border-solid border-5 border-warning"
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
              alt="Persona Random"
            />
            <span>
              <b>Correo: </b>{email}
            </span>
            <span>
              <b>Creación cuenta: </b>00/00/00
            </span>
          </div>
          <button className="mt-5 btn btn-warning shadow" onClick={cerrarSesion}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;