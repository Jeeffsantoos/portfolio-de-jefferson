import React, { useState } from 'react';
import './style.css';
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';

export default function Topo() {

  const [menuAberto, setMenuAberto] = useState(true);

  function abrirBotao() {
    setMenuAberto(menuAberto)
  };

  return (
    <header>
      <div className="limita-secao correcao">
        <Link to='/'> <img src={Logo} className='gira' alt="" /></Link>
        <nav className='menu-topo' id={menuAberto ? 'menu-aberto' : 'menu-fechado'}>
          <button onClick={abrirBotao} className='btn-mobile'>
            <span id='hamburguer'></span>
          </button>
          <ul className='lista-menu-topo'>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/Habilidades" >Habilidades</Link></li>
            <li><Link to="/Sobre" >Sobre</Link>
            </li>
            <li><Link to="/Portfolio" >Portfolio</Link>
            </li>
            <li><a href="#contato">Contatos</a></li>
          </ul>
        </nav>
      </div>
    </header >
  )
}