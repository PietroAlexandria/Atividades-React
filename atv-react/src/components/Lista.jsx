import { useState } from "react";
import Item from "./Item";

export default function Lista({lista, remover}){
    return(
        <ul>
            {lista.map((itemAtual, index) => (
                <Item key={index} dado={itemAtual} index={index} remover={remover}/>
            ))}
        </ul>
    );
}