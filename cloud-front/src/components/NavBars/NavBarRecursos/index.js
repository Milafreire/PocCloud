import React, { Component } from "react";
import BotaoRecurso from "../../botoes/BotaoRecurso";
import "./style.css"
/**
 * Um Componente classe que representa uma NavBar de Recursos
 *
 */
class NavBarRecursos extends Component{
  /**
   *
   * @param {Object} props - Objeto responsável por armazenar atributos passados
   * @param {string} [props.ClassDivCotainerRecursos] - adicionar a classe a div mais externa
   * @param {string}[props.ClassDivRecursos] - adicionar classe na div para organizar os recursos
   * @return - Retorna a Barra de recursos
   */
    constructor(props) {
        super(props);
        this.state = {
            classDiv: props.ClassDivCotainerRecursos,
            classdiv2: props.ClassDivRecursos
        }
    }
    render() {
        return (
            <div id="BarraRecursos"
                {...(this.state.classDiv !== "" ? ({ className: this.state.classDiv }) : ({}))} >
                <div  {...(this.state.classDiv2 !== "" ? ({ className: this.state.classDiv2 }) : ({}))}>
                    <BotaoRecurso NomeRecurso="MaquinaVirtual" /><BotaoRecurso NomeRecurso="DataBase" />
                </div>
            </div>
        )
    }
}
export default NavBarRecursos;