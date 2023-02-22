import React from "react";
import Topo from "../../Componentes/Topo/";
import SecaoBanner from "../../Componentes/Secoes/SecaoBanner";
import SecaoSkills from "../../Componentes/Secoes/SecaoSkills";
import SecaoSobre from "../../Componentes/Secoes/SecaoSobre";
import SecaoPortfolio from "../../Componentes/Secoes/SecaoPortfolio";
import SecaoContato from "../../Componentes/Secoes/SecaoContato";
import Rodape from "../../Componentes/Rodape";

export default function Habilidade() {
  return (
    <main>
      <Topo />

      <SecaoSkills />
      <SecaoContato />
      <Rodape />
    </main>
  )
};