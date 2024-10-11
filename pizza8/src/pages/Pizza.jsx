import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePizzaContext } from "../context/PizzaContext";

const Pizza = () => {
  const { id } = useParams();
  const { pizzas, loading, error, getPizzaId } = usePizzaContext();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    if (pizzas.length > 0) {
      const pizzaData = getPizzaId(id);
      setPizza(pizzaData);
    }
  }, [id, pizzas]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;
  if (!pizza) return <div>No se encontró la pizza.</div>;

  const { img, name, ingredients, price, desc } = pizza;

  return (
    <div className="vh-100 p-4 bg-secondary d-flex align-items-center justify-content-center">
      <div className="border border-3 border-warning p-3 rounded">
        <div className="bg-white p-5 rounded shadow">
          <h1 className="mb-4">Tipo de Pizza: {name}</h1>
          <img
            src={img}
            alt={`Imagen de ${name}`}
            className="w-25 rounded mb-3"
          />
          <p>
            <b>Ingredientes:</b> {ingredients.join(", ")}.
          </p>
          <p>
            <b>Descripción:</b> {desc}
          </p>
          <p>
            <b>Precio:</b>{" "}
            {new Intl.NumberFormat("es-CL", {
              currency: "CLP",
              style: "currency",
            }).format(price)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pizza;