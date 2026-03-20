export default function Item({nome, index, remover}){
    return(
        <li>
            {nome}
            <button className="counter" onClick={() => remover(index)} style={{marginLeft: '10px'}}>Remover</button>
        </li>
    );
}