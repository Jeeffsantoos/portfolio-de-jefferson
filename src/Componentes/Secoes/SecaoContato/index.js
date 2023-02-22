import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoLogoGithub } from 'react-icons/io';
import { IoIosChatboxes } from 'react-icons/io';
import './style.css';

export default function SecaoContato(props) {
  return (
    <section className='secao-contato'>
      <h4 className='limita-secao'>Contatos</h4>
      <nav className='contato-menu limita-secao'>
        <ul>
          <li>
            <a href="https://www.instagram.com/_jeeffsantoos/" target='_blank' rel="noreferrer">
              <AiFillInstagram size={34} className='icons' />
            </a>
          </li>
          <li>
            <a href="https://whatsa.me/5521994952025" target='_blank' rel="noreferrer">
              <IoLogoWhatsapp size={34} className='icons' />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jeeffsantoos/" target='_blank' rel="noreferrer">
              <IoLogoLinkedin size={34} className='icons' />
            </a>
          </li>
          <li>
            <a href="https://github.com/Jeeffsantoos" target='_blank' rel="noreferrer">
              <IoLogoGithub size={34} className='icons' />
            </a>
          </li>
          <li>
            <a href="mailto:jeeffsantoos@outlook.com" target='_blank' rel="noreferrer">
              <IoIosChatboxes size={34} className='icons' />
            </a>
          </li>
        </ul>
      </nav>
    </section >
  )
}