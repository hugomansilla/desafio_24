import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { usePizzaContext } from "../context/PizzaContext";
import { useUserContext } from "../context/UserContext";
import axios from "axios";

const Cart = () => {
  const { carrito, eliminarPizza, actualizarCantidad, totalPagar } = useCart();
  const { pizzas } = usePizzaContext();
  const { token } = useUserContext();
  const [message, setMessage] = useState("");

  const checkout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/checkouts",
        { cart: carrito },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage("Compra realizada con éxito! 😁");
    } catch (error){
      setMessage(error.response?.data?.message || "Error en la compra ☹️");
      console.error(error);
    }
  };

  const findPizzaById = (id) => {
    return pizzas.find((pizza) => pizza.id === id);
  };

  const incrementar = (pizza) => {
    actualizarCantidad(pizza.id, pizza.count + 1);
  };

  const decrementar = (pizza) => {
    if (pizza.count > 1) {
      actualizarCantidad(pizza.id, pizza.count - 1);
    } else {
      eliminarPizza(pizza.id);
    }
  };

  return (
    <div className="container contenedor-carro mt-4">
      <div className="row">
        <div className="col-12">
          <span className="fw-bold">Detalles del pedido:</span>
        </div>
      </div>
      <div className="row contenedor-contadores mt-3">
        <div className="col-12">
          <div className="contadores d-flex flex-column flex-md-row justify-content-between gap-1">
            <span className="contador fw-bold shadow-sm">
              Cantidad de pizzas:{" "}
              {carrito.length === 0
                ? "El carrito está vacío"
                : carrito.reduce(
                    (acumulador, pizza) => acumulador + pizza.count,
                    0
                  )}
            </span>
            <span className="contador fw-bold shadow-sm">
              Total a pagar:{" "}
              {new Intl.NumberFormat("es-CL", {
                currency: "CLP",
                style: "currency",
              }).format(totalPagar)}
            </span>
          </div>
        </div>
      </div>
      <div className="row pizzas-carro mt-4">
        {carrito.length === 0 ? (
          <div className="col-12 text-center">
            <p>El carrito está vacío</p>
          </div>
        ) : (
          carrito.map((carritoItem) => {
            const pizza = findPizzaById(carritoItem.id);
            return pizza ? (
              <div className="col-sm-12 col-md-6 col-lg-4 mb-3" key={pizza.id}>
                <div className="d-flex align-items-center h-100 border p-3">
                  <div className="contenido-pizza flex-grow-1">
                    <img
                      src={pizza.img}
                      className="img-fluid img-tamaño mb-2"
                      alt={`Imagen de ${pizza.name}`}
                    />
                    <div className="d-flex justify-content-around align-items-center">
                      <p className="mb-1 fw-semibold">{pizza.name}</p>
                      <p className="mb-1 fw-semibold">
                        Cantidad: {carritoItem.count}
                      </p>
                      <div className="d-flex align-items-center justify-content-center gap-1">
                        <button
                          className="btn btn-success"
                          onClick={() => incrementar(carritoItem)}
                        >
                          +
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => decrementar(carritoItem)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })
        )}
      </div>
      <div className="row mt-4">
        <div className="col-12 text-center">
          <button
            className="btn btn-primary btn-lg mb-5 pagar"
            disabled={carrito.length === 0 || !token} onClick={checkout}
          >
            Pagar 💳
          </button>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Cart;