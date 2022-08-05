import React from 'react'
import '../stylesheets/Antropotec.css';

function Antropotec(props) {
  return (
    <div className= 'contenedor-antropotec'>
      <img className= 'imagen-antropotec'
      src={ require(`../imagenes/antropotec-${props.imagen}.jpg`)} 
        alt= 'Topicos'/>
        <div className='contenedor-texto-antropotec'>
          <p className='nombre-antropotec'><strong>{props.nombre}</strong></p>
          <p className='texto-antropotec'> {props.texto}</p>
        </div>

      </div>


  );

}
export default Antropotec;