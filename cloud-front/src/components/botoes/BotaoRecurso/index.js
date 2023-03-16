import React, { Component } from 'react';
import IconRecurso from '../../../objects/IconRecurso';
import ModalClouds from '../../Modals/ModalBotoesClouds';
import "./style.css"
/**
 * Um componente de classe que representa os botão de recurso, para definir as configurações deles.
 *
 * @return {JSX.Element} - retorna o botão do recurso escolhido
 */
class BotaoRecurso extends Component{
  /**
   *
   * @param {Object} props - Objeto responsável por armazenar atributos passados
   * @param {"MaquinaVirtual" | "DataBase"} props.NomeRecurso
   *
   */
    constructor(props) {
        super(props);
        this.state = {
            Nome: props.NomeRecurso,
            estado: false,
        }
    }
    handleClick = () => {
        this.setState({ estado: !this.state.estado });
        console.log(this.state.estado);
    }


    render() {
        return(
            <div className='BotaoRecursos'>
                <div className='BotaoNome'>
                    <IconRecurso OnClick={this.handleClick} NomeRecurso={this.state.Nome} />
                    <h4>{this.state.Nome}</h4>
                </div>
                    {this.state.estado &&
                    <ModalClouds Show={this.state.estado} NomeRecurso={this.state.Nome} />
                }
            </div>
            );
    }
}

export default BotaoRecurso