import React from "react";
import Box from "@mui/material/Box";
import { IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
/* Aqui deberan agregar los liks correspondientes a las rutas definidas */
/* Deberan implementar ademas la logica para cambiar de Theme con el button */

const Navbar = () => {
  
  const { state, dispatch } = useContext(ContextGlobal);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#e3f2fd",
        padding: "1.5rem",
      }}
      component="nav"
    >
      <img src="/images/DH.png" alt="DH-logo" style={{ height: "2rem" }} />

      <Typography variant="h5">CLINICA ODONTOLOGICA</Typography>

      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>

      <IconButton
        onClick={() =>
          dispatch(state === "" ? { type: "dark" } : { type: "light" })
        }
      >
        {state === "dark" ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon />
        )}
      </IconButton>
    </Box>
  );
};

export default Navbar;
