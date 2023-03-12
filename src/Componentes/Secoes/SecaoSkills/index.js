import React from 'react';
import LogoReact from '../../../assets/Logo.png';
import LogoJS from '../../../assets/LogoJS.png';
import LogoHTML from '../../../assets/LogoHtml.png';
import LogoCSS from '../../../assets/LogoCSS.png';
import LogoGIT from '../../../assets/LogoGit.png';
import LogoNode from '../../../assets/LogoNodejs.png';
import Card from '../../Cards/Card';
import './style.css'


export default function SecaoSkills(props) {
  return (
    <section className='secao-skills'>
      <div className='titulo'>
        <h3>Tecnologias</h3>
      </div>
      <div className='limita-secao secao-cards'>

        <Card imagem={<img src={LogoHTML} alt="" />}
          titulo="HTML"
          paragrafo="HTML é uma linguagem de marcação utilizada na construção de páginas na Web" />

        <Card imagem={<img src={LogoCSS} alt="" />}
          titulo="CSS"
          paragrafo="Aplicação utilizada na estilização de componentes escritos em linguagens de marcação." />

        <Card imagem={<img src={LogoJS} alt="" />}
          titulo="JavaScript"
          paragrafo="Utilizo o JavaScript para criar aplicações com comportamento interativo e complexo. " />

        <Card imagem={<img src={LogoReact} alt="" />}
          titulo="ReactJS"
          paragrafo="Criação de páginas utilizando o framework ReactJS, proporcionando  interatividade ao usuário." />

        <Card imagem={<img src={LogoGIT} alt="" />}
          titulo="Git e GitHub"
          paragrafo="Utilizo o Git como programa de controle de versão das minhas aplicações." />

        <Card imagem={<img src={LogoNode} alt="" />}
          titulo="NodeJs"
          paragrafo="Utilizo o NodeJs para a criação de API's no padrão REST." />

      </div>
    </section >
  )
}