import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    
    const total = 25000;
    const totalFormateado = total.toLocaleString('es-ES');
    const token = true;

  return (
    <div>
      {token ? (

        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Pizzería Mamma Mía!</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item btn btn-secondary ms-2">
                    <Link to="/" className='nav-link active'>
                        <i class="bi bi-shop me-2"></i>Home
                    </Link>
                </li>
                <li className="nav-item btn btn-secondary ms-2">
                    <Link to="/Profile" className='nav-link active'>
                        <i class="bi bi-unlock me-2"></i>Profile
                    </Link>
                </li>
                <li className="nav-item btn btn-secondary ms-2">
                    <Link to="/Logout" className='nav-link active'>
                        <i class="bi bi-unlock me-2"></i>Logout
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
                <li className="nav-item btn btn-secondary ms-2">
                    <Link to="/Cart" className='nav-link active'>
                        <i class="bi bi-cart-dash me-2"></i>Total: {totalFormateado}
                    </Link> 
                </li>
            </ul>
            </div>
        </div>
        </nav>

      ) : (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Pizzería Mamma Mía!</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item btn btn-secondary ms-2">
                    <Link to="/" className='nav-link active'>
                        <i class="bi bi-shop me-2"></i>Home
                    </Link>
                </li>
                <li className="nav-item btn btn-secondary ms-2">
                    <Link to="/Login" className='nav-link active'>
                        <i class="bi bi-lock me-2"></i>Login
                    </Link>
                </li>
                <li className="nav-item btn btn-secondary ms-2">                
                    <Link to="/Register" className='nav-link active'>
                        <i class="bi bi-lock me-2"></i>Register
                    </Link>   
                </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
                <li className="nav-item btn btn-secondary ms-2">
                    <Link to="/Cart" className='nav-link active'>
                        <i class="bi bi-cart-dash me-2"></i>Total: {totalFormateado}
                    </Link> 
                </li>
            </ul>
            </div>
        </div>
        </nav>

      )}
    </div>

  )
}

export default Navbar