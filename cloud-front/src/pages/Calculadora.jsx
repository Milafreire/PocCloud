import React from 'react';
import NavBarAplicacao from '../components/NavBars/NavBarAplicacao';
import NavBarRecursos from '../components/NavBars/NavBarRecursos';
import './navbar.css'
/**
 *
 * @returns {JSX.Element} retorna a página da aplicação
 */
function Aplicacao() {
  function MostrarRecursos() {
    const BarraRecursos = document.getElementById("BarraRecursos")
    if (BarraRecursos ) {
      BarraRecursos.classList.add("ativado");
    }
  }
  function EsconderRecursos() {
    const BarraRecursos = document.getElementById("BarraRecursos")
    if (BarraRecursos ) {
      //BarraRecursos.classList.remove("ativado");
    }
  }
  return (
      <div onMouseOver={MostrarRecursos}
           onMouseLeave={EsconderRecursos}
        id="ContainerNavBar" >

        <NavBarAplicacao Logo="BlueShiftOriginal" />

        <NavBarRecursos ClassDivCotainerRecursos="ativado"/>
      </div>
  );
}

export default Aplicacao;
