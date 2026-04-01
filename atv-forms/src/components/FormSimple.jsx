import { useState } from "react";

export default function FormSimple()  {
    const initialForm = { titulo: "", autor: "" };
    const [form, setForm] = useState(initialForm);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        if (!form.titulo.trim() || !form.autor.trim()) {
            alert("PREENCHA TODOS OS CAMPOS OBRIGATÓRIOS!");
            return;
        }
        else {
            alert("Enviado");
            setForm(initialForm);
        }
    }

    return (
    <div className="form-container">
        <h2 className="form-title">Cadastro de Livro</h2>
        <form onSubmit={handleSubmit} className="book-form">
            <div className="form-group">
                <label className="form-label">Título do Livro:</label>
                <input 
                type="text"
                placeholder="Digite o título"
                name="titulo"
                value={form.titulo}
                onChange={handleChange}
                className="form-input"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Autor:</label>
                <input 
                 type="text"
                 placeholder="Digite o autor"
                 name="autor"
                 value={form.autor}
                 onChange={handleChange}
                 className="form-input"
                />
            </div>

            <button type="submit" className="form-button">Enviar</button>
        </form>

        <h3 className="data-title">Dados digitados:</h3>
        <pre className="data-display">{JSON.stringify(form, null, 2)}</pre>

    </div>
    );
}