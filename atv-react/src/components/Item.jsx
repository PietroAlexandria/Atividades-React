export default function Item({dado, index, remover}){
    return(
        <li>
            <strong>Nome: </strong> {dado.nome} | <strong>E-mail: </strong> {dado.email}
            <button className="counter" onClick={() => remover(index)} style={{marginLeft: '10px'}}>Remover</button>
        </li>
    );
}