import React from "react";
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom";

function Inicio(){
const navigate = useNavigate()
  return(
    
    <>
    <h1>Plantilla MERN</h1>
      <h2>Una vez instalado todos los paquetes con npm i
      agregar al gitignore los siguientes parametros</h2>
      <h3>Frontend</h3>
      <ul>
        <li>.dotenv???</li>
        <li>visual studio code (ver y probar)</li>
      </ul>
      <h3>Backend</h3>
      <ul>
        <li>.dotenv</li>
      </ul>
      <h2>Notas</h2>
      <ul>
        <li>Modularizar toda esta explicacion para poder borrarla rapidamente ver que quede como una referencia adentro del proyecto</li>
      </ul>


      
      <Button variant="contained" color="primary" onClick={()=>navigate('/componentes')}>
      Siguiente
      </Button>
      </>

)
}

export default Inicio