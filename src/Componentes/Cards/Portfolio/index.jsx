import React from "react";
import './style.css';

export default function Portfolio(props) {
  return (

    <div className="portfolio">
      {props.imagem}
      <div className="portfolio-card">
        <div>
          <a href={props.link} target="_blank" rel="noreferrer"><button className="btn-grad">Deploy</button></a>
        </div>

        <div>
          <a href={props.git} target="_blank" rel="noreferrer"><button className="btn-grad">Repositório</button></a>

        </div>
      </div>


    </div >

  )
}