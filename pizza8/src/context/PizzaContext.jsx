import React, { createContext, useState, useEffect, useContext } from "react";

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      if (!response.ok) {
        throw new Error("No funcionan los datos. ☹️");
      }
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getPizzaId = (id) => {
    return pizzas.find((pizza) => pizza.id ===id);
  }

  return (
    <PizzaContext.Provider value={{ pizzas, loading, error, getPizzaId }}>
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizzaContext = () => useContext(PizzaContext);