import React from "react";
import Header from "./Header";
import Galeria from "./Galeria";
import { usePizzaContext } from "../context/PizzaContext";

function Home() {
  const {pizzas, loading, error} = usePizzaContext();

  return (
    <div className="vh-auto">
      <Header />
      <Galeria
        pizzas={pizzas}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default Home;