import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  let favorites = JSON.parse(localStorage.getItem("favorites"));

  return (
    <>
      <h1>Dentists Favs</h1>
      {
        <div className="card-grid">
          {favorites &&
            favorites.map(odontologo => (
              <Card
                key={odontologo.id}
                id={odontologo.id}
                name={odontologo.name}
                username={odontologo.username}
              />
            ))}
        </div>
      }
    </>
  );
};

export default Favs;
