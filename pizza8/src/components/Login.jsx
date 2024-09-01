import React from 'react'
import { useState } from 'react'

const Register = () => {
  const [datos,setDatos] = useState({
    email: "",
    contrasena: "",
  })

  const [mensajeExito, setMensajeExito] = useState("");

  const actualizarFormulario = (event) => {
    setDatos({
      ...datos,
      [event.target.name]:event.target.value
    })

  }

  const enviarFormulario = (event) => {
    event.preventDefault();

    if (!datos.email || !datos.contrasena) {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (datos.contrasena.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    alert(`Has enviado el formulario con el email: ${datos.email}`);

    setMensajeExito(`¡Registro exitoso! Has enviado el formulario con el email: ${datos.email}`);

    setDatos({
      email: "",
      contrasena: "",
    })
  } 

  return (
    <div className='formulario mb-3'>
        <h1>Registro</h1>
        <br />
        <form onSubmit={enviarFormulario}>
            <input type="email" name="email" placeholder='Ingrese su email' value={datos.email} onChange={actualizarFormulario}/>
            <br />
            <input type="password" name="contrasena" placeholder='Ingrese su contraseña' value={datos.contrasena} onChange={actualizarFormulario} />
            <br />
            <button className="btn btn-primary" type="submit" value="Enviar">Registrar</button>
            <br />
        </form>
        {mensajeExito && <div className="alert alert-success mt-3">{mensajeExito}</div>}

    </div>

  )
}

export default Register