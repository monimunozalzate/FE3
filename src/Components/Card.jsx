import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";



const CardOdontologo = ({ name, username, id }) => {

  

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <Link to={`/dentist/${id}`} 
        key={id}
      >
        <Card 
          sx={{ maxWidth: 345 }}         
        >
          <CardMedia
            component="img"
            height="194"
            image="/images/doctor.jpg"
            alt="img doctor"          
          />
          <CardHeader
            title={name}
            subheader={username}
          />     
          <CardActions sx={{display:"flex", justifyContent: "center", alignItems:"center"}}>
            <Button  onClick={addFav} type="button" variant="contained" color="primary">Add fav</Button>       
          </CardActions>        
        </Card>
        </Link>
        
    </div>
  );
};

export default CardOdontologo;
