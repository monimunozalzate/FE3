import React from "react";
import Card from "../Components/Card";
import { useState, useEffect } from "react";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [odontologos, setOdontologos] = useState([]);
  const [dispatchLike, setDispatchLike] = useState(false)

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setOdontologos(res.data))
      .catch((err) => console.log(err));

      setDispatchLike(false)
  }, [dispatchLike]);

  return (
    <main className="">
      <div className="card-grid">
        {
          /* Aqui deberias renderizar las cards */

          odontologos.map((odontologo) => {
            return (
              <Card
                key={odontologo.id}
                name={odontologo.name}
                username={odontologo.username}
                id={odontologo.id}
              />
            );
          })
        }
      </div>
    </main>
  );
};

export default Home;
