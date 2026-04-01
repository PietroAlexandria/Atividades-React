import { useState } from "react";

export default function FormularioLivro() {

  const initialForm = { nome: "", email: "", cidade: "", perfil: "", novidades: false, observacoes: "" };
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

    if (!form.nome.trim() || !form.email.trim() || !form.cidade.trim() || !form.perfil) {
      alert("PREENCHA TODOS OS CAMPOS OBRIGATÓRIOS!");
      return;
    }
    else{
      alert(`Dados enviados:
      Nome: ${form.nome}
      Email: ${form.email}
      Cidade: ${form.cidade}
      Perfil: ${form.perfil}
      Novidades: ${form.novidades}
      Observações: ${form.observacoes}`);
      setForm(initialForm);
    }
  }

  return (
    <div className="form-card">
      <h2 className="title2">Cadastro</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-field">
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>E-mail:</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Cidade:</label>
          <input
            type="text"
            name="cidade"
            value={form.cidade}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Perfil:</label>
          <select
            name="perfil"
            value={form.perfil}
            onChange={handleChange}
          >
            <option value="">Selecione uma opção</option>
            <option value="estudante">Estudante</option>
            <option value="professor">Professor</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div className="form-field">
          <label>Novidades:</label>
          <input
            type="checkbox"
            name="novidades"
            checked={form.novidades}
            onChange={(e) => setForm({ ...form, novidades: e.target.checked })}
          />
        </div>

        <div className="form-field">
          <label>Observações:</label>
          <textarea
            name="observacoes"
            value={form.observacoes}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="counter">Cadastrar</button>

      </form>

      <h3>Dados digitados:</h3>
      <pre>{JSON.stringify(form, null, 2)}</pre>

    </div>
  );
}