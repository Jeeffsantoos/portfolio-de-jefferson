import React from "react";
import './style.css';


export default function Card(props) {
  return (

    <div className="card" >
      <div>
        <p>{props.imagem}</p>
      </div>
      <div className="card-texto">
        <h4>{props.titulo}</h4>
        <p>{props.paragrafo}</p>
      </div>
    </div >

  )
}