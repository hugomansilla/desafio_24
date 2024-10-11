import React from 'react'

const Profile = ({ email, onLogout }) => {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Hola {email}</h2>
        <button 
          onClick={onLogout} 
          style={{
            padding: '10px 20px',
            marginTop: '20px',
            backgroundColor: '#ff4d4d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>
    );
  };

export default Profile