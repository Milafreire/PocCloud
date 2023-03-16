import React, { useState } from "react";
import VmIcon from "./img/VmIcon.svg";
import DataBaseIcon from "./img/DataBaseIcon.svg";
import "./style.css"

/**
 *
 * Objeto responsável por criar icons de Recursos
 *
 * @param {Object} props - Objeto responsável por armazenar atributos passados
 *
 * @param {"MaquinaVirtual" | "DataBase"} props.NomeRecurso - Seleciona a logo do Recurso
 *
 * @param {function} [props.OnClick] - Atribui uma função ao onClick na tag img
 * @param {string} [props.ImgClass] - Atribui um id a img
 * @return {JSX.Element} - Retorna uma img com a logo do Recurso
 */

const IconRecurso = (props) => {
    const { OnClick,NomeRecurso,ImgClass } = props;

    const PathIconsRecursos = {
        MaquinaVirtual: VmIcon,
        DataBase: DataBaseIcon
    };

    return (
        <img
        {...(OnClick !== undefined ? { onClick: (event) => OnClick(event) } : ({}))}
        {...(ImgClass !== undefined ? { className:ImgClass } : ({}))}
        src={PathIconsRecursos[NomeRecurso]}
        className="IconRecurso"
        alt={`icon do recurso ${NomeRecurso}`} />);
    }

export default IconRecurso;