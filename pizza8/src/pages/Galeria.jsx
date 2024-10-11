import React from "react";
import Cardpizza from "./CardPizza";
import { usePizzaContext } from "../context/PizzaContext";

function Galeria() {
  const { pizzas, loading, error } = usePizzaContext();

  if (loading) return <div className="vh-100 d-flex justify-content-center p-3"><p>Cargando...</p></div>;
  if (error) return <div className="vh-100 d-flex justify-content-center p-3"><p className="fw-bold">Error: {"Ups, hubo un error al cargar los datos. ☹️"}</p></div>;
  if (pizzas.length === 0) return <p>No has agregado ninguna pizza. 😅</p>;

  return (
    <div className="container mt-5 mb-5 contenedor-cartas">
      <div className="row">
        {pizzas.map((pizza) => (
          <div
            key={pizza.id}
            className="col-sm-12 col-md-6 col-lg-4 mt-5 mb-sm-3"
          >
            <Cardpizza id={pizza.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;