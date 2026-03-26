import { useState } from "react";

export default function InputNome(){
    const [nome, setNome] = useState("");
    const [lista, setLista] = useState([]);

    const adicionar = () => {

        if (nome.trim() === "") {
            alert("Digite um nome válido!");
            return;
        }
        else{
            setLista([...lista, nome]);
            setNome("");
        }
    }

    const remover = (index) => {
        setLista(lista.filter((_, i) => i !== index));
    }

    return(
        <div>
            <h2 className="title2">Lista de Nomes</h2>

            <input
            value={nome} onChange={(e) => setNome(e.target.value)}
            />
            <button className="counter" onClick={adicionar} style={{marginLeft: '10px'}}>Adicionar</button>

            <ul>
                {lista.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button className="counter" onClick={() => remover(index)} style={{marginLeft: '10px'}}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}