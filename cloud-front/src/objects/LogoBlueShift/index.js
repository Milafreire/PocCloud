import React from "react";
import LogoBlueShiftOriginal from "./img/LogoBlueShiftOriginal.svg";
import LogoBlueShiftWhite from "./img/LogoBlueShiftWhite.svg";

/**
* @param {Object} props - Objeto responsável por armazenar atributos passados
* @param {"BlueShiftOriginal" | "BlueShiftWhite"} props.Logo - seleciona o tipo de logo
* @param {string} [props.idimg=""] - adicionar um id na img
* @param {string} [props.iddiv=""] - adicionar um id na div
*
* @return {JSX.Element} retorna Logo BlueShift
*/

const LogoBlueShift = (props) => {
    const PathLogosBlueShift = {
        BlueShiftOriginal: LogoBlueShiftOriginal,
        BlueShiftWhite: LogoBlueShiftWhite
    }
    const { iddiv,idimg,Logo } = props;
    return (
        <div {...(iddiv !== "" ? ({id: iddiv}) : ({}))}>
            <img {...(idimg !== "" ? ({id: idimg}) : ({}))} src={PathLogosBlueShift[Logo]} alt="Logo BlueShift"></img>
        </div>
  );
}

export default LogoBlueShift;