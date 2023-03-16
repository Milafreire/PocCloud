import { Route, Router, Routes } from "react-router-dom";
import Aplicacao from "../pages/Calculadora";
import Home from "../pages/Home";


export default function Rotes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/calculadora" element={ <Aplicacao />} />
        </Routes>
    )
}