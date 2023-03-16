import React, { Component } from 'react';
import Icon from '../../../objects/Icon';
import LogoBlueShift from '../../../objects/LogoBlueShift';
import './style.css';
/**
 * Um componente de classe que representa uma NavBar
 *
 */
class NavBarAplicacao extends Component{
 /**
 * @param {Object} props - Objeto responsável por armazenar atributos passados
 * @param {"BlueShiftOriginal" | "BlueShiftWhite"} props.Logo - seleciona o tipo de logo
 */
    constructor(props){
        super(props);
        this.state = {
            logo: props.Logo
        }
    }
    render() {
        return (
            <nav className="NavBarAplicacao">
                <LogoBlueShift idimg="logo_BlueShift" Logo={this.state.logo} />
            </nav>
        );
    }
}
export default NavBarAplicacao;