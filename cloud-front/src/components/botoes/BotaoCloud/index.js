import React, { Component } from 'react';
import ModalConfigRecurso from '../../Modals/ModalConfigRecurso';
import IconClouds from '../../../objects/IconCloud';

/**
 * Um componente de class que representa os botões das clouds
 */
class BotaoCloud extends Component{
    /**
     *
     * @param {Object} props - Objeto responsável por armazenar atributos passados
     * @param {"MaquinaVirtual" | "DataBase"} props.NomeRecurso - Nome do recurso
     * @param {"AZURE" | "GCP" | "AWS"} props.CloudName
     *
     */
    constructor(props) {
        super(props);
        this.state = {
            Nome: props.NomeRecurso,
            Cloud: props.CloudName,
            estado: false
        }
    }
    handleClick = () => {
        this.setState({estado:!this.state.estado});
    }
    render(){
        return(
            <div>
                <IconClouds
                    OnClick={this.handleClick} ImgClass='BotaoCloud' NomeCloud={this.state.Cloud} />
                {this.state.estado &&
                    <ModalConfigRecurso
                        OnClick={this.handleClick} NomeRecurso={this.state.Nome} />
                }
            </div>
        );
    }
}

export default BotaoCloud