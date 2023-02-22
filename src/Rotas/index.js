import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../Paginas/Home/";
import Habilidade from '../Paginas/Habilidade';
import Contato from '../Paginas/Portfolio';
import Sobre from '../Paginas/Sobre';
import Portfolio from '../Paginas/Portfolio';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Sobre' element={<Sobre />} />
        <Route path='/Habilidades' element={<Habilidade />} />
        <Route path='/Portfolio' element={<Portfolio />} />
      </Routes>
    </BrowserRouter >
  );
};

