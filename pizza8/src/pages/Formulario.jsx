import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Formulario = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);
  const navigate = useNavigate();

  const validarDatos = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError(true);
      setExito(false);
      return;
    }

    setError(false);
    setExito(true);

    setToken(true);
    navigate("/");

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        {error && (
          <p style={{ color: "red" }}>Todos los campos son obligatorios</p>
        )}
        {exito && <p style={{ color: "green" }}>Ya Ingresaste!</p>}
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Correo"
            />
          </div>
          <div className="form-group mt-2">
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Contraseña"
            />
          </div>
          <button type="submit" className="btn btn-dark mt-3 d-block mx-auto">
            Enviar
          </button>
      </form>
    </>
  );
};

export default Formulario;