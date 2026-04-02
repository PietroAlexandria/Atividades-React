import { useState } from "react";

export default function FormSimple()  {
    const initialForm = { titulo: "", autor: "", categoria: "", status: false, tecnologias: [] };
    const [form, setForm] = useState(initialForm);
    const [enviado, setEnviado] = useState(null);

    function handleChange(e) {
        const { name, type, value, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    function handleTecnologias(e) {
        const { value, checked } = e.target;
        setForm({
            ...form,
            tecnologias: checked
                ? [...form.tecnologias, value]
                : form.tecnologias.filter(t => t !== value)
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(form);
        
        if (!form.titulo.trim() || !form.autor.trim() || !form.categoria) {
            alert("PREENCHA TODOS OS CAMPOS OBRIGATÓRIOS!");
            return;
        }
        else {
            setEnviado(form);
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

            <div className="form-group">
                <label className="form-label">Categoria:</label>
                <select
                    name="categoria"
                    value={form.categoria}
                    onChange={handleChange}
                    className="form-input"
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Banco de Dados">Banco de Dados</option>
                    <option value="Mobile">Mobile</option>
                </select>
            </div>

            <div className="form-group">
                <label className="form-label">Tecnologias relacionadas:</label>
                <div className="checkbox-group">
                    {["JavaScript", "Java", "Python", "PHP"].map(tec => (
                        <label key={tec} className="checkbox-item">
                            <input
                                type="checkbox"
                                value={tec}
                                checked={form.tecnologias.includes(tec)}
                                onChange={handleTecnologias}
                                className="checkbox-input"
                            />
                            <span className="checkbox-label">{tec}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label className="checkbox-item">
                    <input
                        type="checkbox"
                        name="status"
                        checked={form.status}
                        onChange={handleChange}
                        className="checkbox-input"
                    />
                    <span className="checkbox-label">Livro disponível para empréstimo</span>
                </label>
            </div>

            <button type="submit" className="form-button">Enviar</button>
        </form>

        <h3 className="data-title">Dados digitados:</h3>
        <pre className="data-display">{JSON.stringify(form, null, 2)}</pre>

        {enviado && (
            <div>
                <h3 className="data-title">Dados enviados:</h3>
                <ul className="data-list">
                    <li><strong>Título:</strong> {enviado.titulo}</li>
                    <li><strong>Autor:</strong> {enviado.autor}</li>
                    <li><strong>Categoria:</strong> {enviado.categoria}</li>
                    <li><strong>Disponível:</strong> {enviado.status ? "Sim" : "Não"}</li>
                    <li><strong>Tecnologias:</strong> {enviado.tecnologias.length > 0 ? enviado.tecnologias.join(", ") : "Nenhuma"}</li>
                </ul>
            </div>
        )}

    </div>
    );
}