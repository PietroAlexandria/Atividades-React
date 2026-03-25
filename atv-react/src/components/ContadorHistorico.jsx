import { useState } from "react";

export default function ContadorHistorico({contador}) {
    const [valor, setValor] = useState(0);
    const [historico, setHistorico] = useState([]);
    
    const Incrementar = () => {
        setValor(valor + 1);
        setHistorico([...historico, valor + 1]);
    }

    const Decrementar = () => {
        setValor(valor - 1);
        setHistorico([...historico, valor - 1]);
    }

    return (
        <div>
            <h2 className="title2">Contador</h2>
            <p>Valor atual do contador: {valor}</p>

            <button className="counter" onClick={Incrementar} style={{marginTop: '10px'}}>Incrementar</button>
            <button className="counter" onClick={Decrementar} style={{ marginLeft: '10px' }}>Decrementar</button>

            <h2 className="title2">Histórico</h2>
            <ul>
                {historico.map((valor, index) => (
                    <li key={index}>{valor}</li>
                ))}
            </ul>

        </div>
    );
}