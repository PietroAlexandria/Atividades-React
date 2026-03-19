import { useState } from "react";

export default function Form(){
    const [usuario, setUsuario] = useState({nome: '', email: ''});
    const handleInputChange = (event) => {
        const {name, value} = event.target; //USADO 'name' E 'value' POIS SÃO NATIVOS DO 'event.target'

        setUsuario((dadosAnteriores) => ({
            ...dadosAnteriores,
            [name]: value
        }));
    };

    return(
        <div>
            <h2 className="title2">Cadastro Simples</h2>

            <form>
                <div style={{marginBottom: '10px'}}>
                    <label>Nome: </label>
                    <input
                        type="text"
                        name="nome"
                        value={usuario.nome} 
                        onChange={handleInputChange} 
                        placeholder="Digite seu nome"
                    />
                </div>

                <div>
                    <label>E-mail: </label>
                    <input
                        type="email"
                        name="email"
                        value={usuario.email} 
                        onChange={handleInputChange} 
                        placeholder="Digite seu e-mail"
                    />
                </div>
            </form>

            <div style={{ marginTop: '20px' }}>
                <p><b>Nome: </b> {usuario.nome} </p>
                <p><b>E-mail: </b> {usuario.email} </p>
            </div>

        </div>
    );
}