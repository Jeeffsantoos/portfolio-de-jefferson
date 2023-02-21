import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../Paginas/Home/";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </BrowserRouter >
  );
};

