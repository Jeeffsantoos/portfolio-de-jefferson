import React from 'react';
import './style.css';
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';

export default function Topo() {
  return (
    <header>

      <div className="limita-secao correcao">
        <Link to='/'> <img src={Logo} className='gira' alt="" /></Link>
        <nav className='menu-topo' >
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