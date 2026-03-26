import { useState } from "react";

export default function Contador(){
    const [valor, setValor] = useState(0);

    return (
        <div>
            <h1 className="counter">Contador: {valor}</h1>
            <br />
            <button className="counter" onClick={() => setValor(valor + 1)}>Incrementar</button> 
            <p></p>
            <button className="counter" onClick={() => setValor(valor - 1)}>Decrementar</button>
        </div>
    );
}