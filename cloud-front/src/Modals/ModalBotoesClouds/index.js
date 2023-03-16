import React, { Component } from "react";
import BotaoCloud from "../../botoes/BotaoCloud";
import './style.css'
/**
 * Um componente de classe que representa um modal de icons de clouds
 *
 */
class ModalClouds extends Component {
  /**
  * @param {Object} props - Objeto responsável por armazenar atributos passados
  *
  * @param {"Maquinavirtual" | "DataBase"} props.NomeRecurso - Reponsável por propagar a escolha de recurso
  *
  */
    constructor(props) {
        super(props);
        this.state = {
            Nome: props.NomeRecurso
        }
    }

    render() {
            return (
                <ul className="ModalBotoesClouds">
                    <li><BotaoCloud CloudName="GCP" NomeRecurso={this.state.Nome}/></li>
                    <li><BotaoCloud CloudName="AZURE" NomeRecurso={this.state.Nome}/></li>
                    <li><BotaoCloud CloudName="AWS" NomeRecurso={this.state.Nome}/></li>
                </ul>
            );
    }
}
export default ModalClouds