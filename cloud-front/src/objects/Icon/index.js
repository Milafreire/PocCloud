import React from "react";
import PlusIcon from "./img/PlusIcon.svg"
import XIcon from "./img/XIcon.svg"
/**
 *
 * @param {Object} props - Objeto responsável por armazenar atributos passados
 * @param {"PlusIcon" | "XIcon"} props.Icon - Tipo de icone
 * @param {string} [props.idimg] - Adiciona um id na img
 * @param {string} [props.classimg] - adiciona uma classe na img
 * @param {Function} [props.OnClick] - Adiciona a função ao onClick da img
 * @returns
 */
const Icon = (props) => {
    const { Icon, idimg, classimg, OnClick } = props;
    const PathsIcons = {
        PlusIcon: PlusIcon,
        XIcon: XIcon
    };
    return (
        <img
            {...(OnClick !== undefined ? { onClick: (event) => OnClick(event) } : ({}))}
             {...(idimg !== "" ? ({ id: idimg }) : ({}))}
             {...(classimg !== "" ? ({className: classimg }) : ({}))}
            src={PathsIcons[Icon]} alt={`Iconem ${Icon}`} />

    );
}
export default Icon;