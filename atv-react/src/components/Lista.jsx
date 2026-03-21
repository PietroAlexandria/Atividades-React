import Item from "./Item";

export default function Lista({lista, remover}){
    return(
        <ul>
            {lista.map((Item, index) => (
                <Item key={index} dado={Item} index={index} remover={remover}/>
            ))}
        </ul>
    );
}