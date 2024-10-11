import React from 'react'
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
        <br />
        <br />
        <br />
        <br />
        <h1 className='text-center'>Página no encontrada :C</h1>
        <br />
        <h2 className='text-center'>Disculpe las molestias</h2>
        <br />
        <div className='text-center'>
            <button style={{
                      padding: '10px 20px',
                      marginTop: '20px',
                      backgroundColor: '#ff4d4d',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                  }}>
                <Link to="/" >Volver al Home</Link>
            </button>
        </div>
        <br />
        <br />
    </div>
  )
}

export default Notfound