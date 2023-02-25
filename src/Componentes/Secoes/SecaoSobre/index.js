import React from 'react';
import './style.css';


export default function SecaoSobre() {
  return (
    <section id='sobre' className='secao-sobre'>

      <div className="limita-secao secao-sobre-container">
        <div className='secao-barras'>

          <div className='barras'>
            <div className='skill'>
              <p>Inglês</p>
              <p>50%</p>
            </div>
            <div className='barra'>
              <div class="progress-bar1"></div>
            </div>
          </div>

          <div className='barras'>

            <div className='skill'>
              <p>Trabalho em equipe</p>
              <p>100%</p>
            </div>

            <div className='barra'>
              <div class="progress-bar2"></div>
            </div>

          </div>
          <div className='barras'>
            <div className='skill'>
              <p>Resiliência</p>
              <p>100%</p>
            </div>
            <div className='barra'>
              <div class="progress-bar3">

              </div>
            </div>

          </div>
          <div className='barras'>
            <div className='skill'>
              <p>Comunicação</p>
              <p>100%</p>
            </div>
            <div className='barra'>
              <div class="progress-bar4">

              </div>
            </div>
          </div>

        </div>

        <div className='limita-secao sobre-mim'>
          <h3>
            Sobre Mim
          </h3>
          <h4>Desenvolvedor Front-End</h4>
          <p>
            Olá! Eu sou um Desenvolvedor Front-end especializado em JavaScript; Possuo habilidades sólidas em HTML5 E CSS3.
          </p>
          <p>
            Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na Universidade do Grande Rio - Afya, no primeiro semestre, com o objetivo de aperfeiçoar ainda mais minhas habilidades.
          </p>
          <p>Desde 2022, venho atuando no desenvolvimento de software e posso afirmar que estou apaixonado por esta área. Sempre fui fascinado por tecnologia e me arrependo de não ter iniciado minha carreira nesta área mais cedo.
          </p>
        </div>
      </div>
    </section >
  )
}