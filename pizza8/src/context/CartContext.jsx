import { createContext, useState, useContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarPizza = (pizza) => {
    setCarrito((prevCarrito) => {
      const coincidencia = prevCarrito.find((item) => item.id === pizza.id);
      if (coincidencia) {
        return prevCarrito.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCarrito, { ...pizza, count: 1 }];
      }
    });
  };

  const eliminarPizza = (id) => {
    setCarrito((prevCarrito) => {
      // Asegúrate de usar `id` correctamente aquí
      const coincidencia = prevCarrito.find((item) => item.id === id);

      if (coincidencia) {
        if (coincidencia.count > 1) {
          return prevCarrito.map((item) =>
            item.id === id ? { ...item, count: item.count - 1 } : item
          );
        } else {
          return prevCarrito.filter((item) => item.id !== id);
        }
      }
      return prevCarrito;
    });
  };

  const actualizarCantidad = (id, cantidad) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === id ? { ...item, count: cantidad } : item
      )
    );
  };

  const totalPagar = carrito.reduce(
    (acumulador, pizza) => acumulador + pizza.price * pizza.count, 0
  );

  return (
    <CartContext.Provider value={{ carrito, agregarPizza, eliminarPizza, actualizarCantidad, totalPagar }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;