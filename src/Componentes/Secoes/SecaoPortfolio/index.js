import React from 'react';
import Portfolio from '../../Cards/Portfolio';
import Branding from '../../../assets/AgenciaBranding.png';
import Aviagens from '../../../assets/agenciadeviagens.png';
import Clinica from '../../../assets/Clinicamedica.png';
import Gerador from '../../../assets/geradordenumeros.png';
import Sorveteria from '../../../assets/sorveteria.png';
import Otica from '../../../assets/Otica.png';
import Barbearia from '../../../assets/barbearia.png';
import Calculadora from '../../../assets/calculadora_imc.png';
import './style.css';


export default function SecaoPortfolio() {
  return (
    <section className='secao-portfolio'>
      <div className='titulo'>
        <h4>PROJETOS</h4>
        <div className='secao-cards-portfolio'>
          <Portfolio imagem={<a href='https://landing-page-branding.vercel.app/' target="_blank" rel="noreferrer"><img src={Branding} alt=""></img></a>}
            link="https://landing-page-branding.vercel.app/"
            git="https://github.com/Jeeffsantoos/Landing-Page-Branding"
          />

          <Portfolio imagem={<a href='https://agencia-de-viagens-wheat.vercel.app/' target="_blank" rel="noreferrer"><img src={Aviagens} alt=""></img></a>}
            link="https://agencia-de-viagens-wheat.vercel.app/"
            git="https://github.com/Jeeffsantoos/AGENCIA_DE_VIAGENS"
          />

          <Portfolio imagem={<a href='https://landing-page-barbearia.vercel.app/' target="_blank" rel="noreferrer"><img src={Barbearia} alt=""></img></a>}
            link="https://landing-page-barbearia.vercel.app/"
            git="https://github.com/Jeeffsantoos/Landing-page-barbearia"
          />

          <Portfolio imagem={<a href='https://clinica-responsiva.vercel.app/' target="_blank" rel="noreferrer"><img src={Clinica} alt=""></img></a>}
            link="https://clinica-responsiva.vercel.app/"
            git="https://github.com/Jeeffsantoos/CLINICA_RESPONSIVA"
          />

          <Portfolio imagem={<a href='https://gerador-de-numeros-umber.vercel.app/' target="_blank" rel="noreferrer"><img src={Gerador} alt=""></img></a>}
            link="https://gerador-de-numeros-umber.vercel.app/"
            git="https://github.com/Jeeffsantoos/gerador-de-numeros/tree/master"
          />

          <Portfolio imagem={<a href='https://pagina-vendas-em-react-js-responsivo.vercel.app/' target="_blank" rel="noreferrer"><img src={Otica} alt=""></img></a>}
            link="https://pagina-vendas-em-react-js-responsivo.vercel.app/"
            git="https://github.com/Jeeffsantoos/Pagina-Vendas-em-ReactJS-Responsivo/tree/main"
          />

          <Portfolio imagem={<a href='https://gelateria-react-js-responsivo.vercel.app/' target="_blank" rel="noreferrer"><img src={Sorveteria} alt=""></img></a>}
            link="https://gelateria-react-js-responsivo.vercel.app/"
            git="https://github.com/Jeeffsantoos/Gelateria_React_js_responsivo/tree/master"
          />

          <Portfolio imagem={<a href='https://calculadora-imc-lc9x.vercel.app/' target="_blank" rel="noreferrer"><img src={Calculadora} alt=""></img></a>}
            link="https://calculadora-imc-lc9x.vercel.app/"
            git="https://github.com/Jeeffsantoos/calculadora_imc"
          />

        </div>

      </div>
    </section >
  )
}