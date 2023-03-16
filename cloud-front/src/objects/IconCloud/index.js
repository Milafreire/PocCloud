import React from "react";
import IconAws from "./img/aws.svg";
import IconGcp from "./img/gcp.svg";
import IconAzure from "./img/azure.svg";
/**
 * Objeto responsável por criar icons de Clouds
 * @param {Object} props - Objeto responsável por armazenar atributos passados
 *
 * @param {"AWS" | "GCP" | "AZURE"} props.NomeCloud - Seleciona a logo da Cloud
 * @param {string} [props.ImgClass] - Atribui classe a tag img
 *
 * @param {Function} [props.OnClick] - Atribui uma funcão ao onClick
 *
 * @return {JSX.Element} - retorna uma img com a logo da cloud
 */

const IconClouds = (props) => {
    const { NomeCloud,ImgClass,OnClick } = props;
    const PathIconCloud = {
        "AWS": IconAws,
        "GCP": IconGcp,
        "AZURE": IconAzure
    };

    return (
        <img src={PathIconCloud[NomeCloud]}
            {...(OnClick !== undefined ? { onClick: (event) => OnClick(event) } : ({}))}
{...(ImgClass !== undefined ? { className: ImgClass } : ({}))}
            alt={`Logo da cloud ${PathIconCloud[NomeCloud]}`}
        />
    );

}

export default IconClouds;