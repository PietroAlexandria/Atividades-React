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


    <form onSubmit={handleSubmit}>
        <div>
            <Label>Título do Livro: </Label>
            <input 
            type="text"
            placeholder="Digite o título"
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            />
        </div>

        <div>
            <label>Autor: </label>
            <input 
             type="text"
             placeholder="Digite o autor"
             name="autor"
             value={form.autor}
             onChange={handleChange}
            />
        </div>

        <button type="submit" className="counter">Enviar</button>
    </form>
}