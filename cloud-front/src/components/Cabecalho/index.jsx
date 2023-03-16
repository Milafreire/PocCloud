import blueshift from '../static/img/logos/site_geral/blueshift.svg'

export default function Cabecalho() {
    return<>
        <div className="Cabecalho">
            <img className="logo" src={blueshift} alt="Logo"/>
            <div ClassName="descricao"></div>
            <div className="lista">
        <nav>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Documentação</a></li>
            <li><a href="#">Autores</a></li>
          </ul>
        </nav>
        </div>
        </div>
    </>
}

