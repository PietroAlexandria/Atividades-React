export default function Formulario(){
    const [usuario, setUsuario] = useState({nome: '', email: ''});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUsuario((dadosAnteriores) => ({
            ...dadosAnteriores,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (usuario.nome.trim() !== '' && usuario.email.trim() !== ''){
            adicionar(usuario);
            setUsuario({nome: '', email: ''});
        }
        else {
            alert('Preencha os campos corretamente!');
        }

    };

    return(
        <form onSubmit={handleSubmit}>
            <label>Nome: </label>
            <input 
                type="text" 
                name="nome"  
                value={usuario.nome} 
                onChange={handleInputChange} 
                placeholder="Digite seu nome"
            />
            <label>E-mail: </label>
            <input 
                type="email" 
                name="email"  
                value={usuario.email} 
                onChange={handleInputChange} 
                placeholder="Digite seu E-mail"
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}