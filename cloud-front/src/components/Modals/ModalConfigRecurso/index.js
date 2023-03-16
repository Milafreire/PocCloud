import React, { Component } from "react";
import Icon from "../../../objects/Icon";
import './style.css'
/**
 * Um Componente de classe que representa um Modal de configuração de recursos das clouds
 */
class ModalConfigRecurso extends Component {
    /**
     * Construtor da classe
     * @param {Object} props - Objeto responsável por armazenar atributos passados
     * @param {Function} props.OnClick - Função para fechar o modal de configuração.
     * @param {"Maquinavirtual" | "DataBase"} props.NomeRecurso
     */
    constructor(props) {
        super(props);
        this.state = {
            Nome: props.NomeRecurso,
            OnClick: props.OnClick
        }
    }
    render() {
        return (
            <div className="ModalRecursoConfig container">
                <div className="header">
                    <h3>
                        Configuração do Recurso
                    </h3>
                    <Icon
                        OnClick={this.state.OnClick} Icon="XIcon" idimg="X" />
                </div>
                <div className="body">

                </div>
                <div className="footer">
                    <div className="DivFooter"></div>
                    <button className="BotaoEnviar">COMPARAR</button>
                </div>
            </div>
        );
    }
}
export default ModalConfigRecurso;