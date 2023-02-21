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
            <li>Home</li>
            <li>Sobre</li>
            <li>Habilidades</li>
            <li>Certificados</li>
            <li>Contato</li>
          </ul>
        </nav>
      </div>
    </header >
  )
}