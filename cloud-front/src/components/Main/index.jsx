import '../home.css';
import Botton from '../Utilidades/botao';

export default function Main()

{
    return<>
        <div className="container1">
        <div className="titulo"><h2>Ache a menor custo para sua aplicação em nuvem</h2></div>        
        <div className="anuncio"><p>Escolha os recursos desejados para sua aplicação, compare o valor deles em diferentes clouds.</p></div>
        <div className='botao'><Botton texto='Clique Aqui' onClick={handleClick}>Botton()</Botton></div></div>
        <div className="container2">
        <div><img className="arte" src={"https://raw.githubusercontent.com/Calculadora-de-Clounds/Front-End/153fcaa391d0d665d933e36c2a3c449a26990789/static/img/imagens/pag_inicial/tela_inicial.svg"} alt="capa"/></div>
        </div>
        
    </>
}

function handleClick() {
    window.location.href = 'www.blueshiftbrasil.com.br';
}