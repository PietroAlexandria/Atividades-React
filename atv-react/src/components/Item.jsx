import { useState } from "react";

export default function Item({dado, index, remover}){
    return(
        <li>
            <strong>Nome: </strong> {dado.nome} <br /> <strong>E-mail: </strong> {dado.email} <br />
            <button className="counter" onClick={() => remover(index)} style={{marginTop: '10px'}}>Remover</button>
        </li>
    );
}