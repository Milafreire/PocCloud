import sobre from '../static/img/imagens/pag_inicial/sobre.svg'
import documentacao from '../static/img/imagens/pag_inicial/documentacao.svg'
import inicial from '../static/img/imagens/pag_inicial/inicial.svg'
import { useNavigate } from 'react-router-dom';

export default function Main() {

    const navigate = useNavigate() 

    return (
        <div>
        <div className='titulo'></div>
        <div className="container1">     
        <div className="texto"><h1>Ache a menor custo para sua aplicação em nuvem</h1>
        <p>Escolha os recursos desejados para sua aplicação, compare o valor deles em diferentes clouds.</p><br></br>
        <button className="calculadora" onClick={ () => navigate("/calculadora") }>Calculadora Cloud</button></div>
        <div><img src={inicial} alt="capa" height={380} width={400}/></div></div>
        <div className="titulo"><h1>Sobre</h1></div>
        <div className="container2">
        <div><img src={sobre} alt="sobre" height={380} width={400}/></div>
        <div className="texto"><h2>O aplicativo Calculadora de clouds criado com objetivo de comparar os recursos entre diferentes tipos de clouds.</h2>
        <p>Principais objetivos:</p>
        <ul>
            <li>Otimizar os custos de nuvem.</li>
            <li>Compara recurso entre nuvens.</li>
            <li>Diminuir tempo de pesquisa.</li>
        </ul></div></div>
        <div className="titulo"><h1>Documentação</h1></div>
        <div className="container3">
        <div className="texto"><p>Acesse a documentação para obter:</p>
            <ul>
                <li>Ajudar no entendimento da aplicação.</li>
                <li>Tutorial de utilização.</li>
                <li>Exemplos de como efetuar uma comparação entre recursos existentes nas clouds.</li>
            </ul>
            <button className="Documentação" onClick={ () => navigate("/documentacao") }>Documentação</button></div>
            <div><img src={documentacao} alt="documentação" height={380} width={380}/></div></div>
        <div className="titulo"><h1>Autores</h1></div>
        </div>

            
    )
}
