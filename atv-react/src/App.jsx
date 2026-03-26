import { useState } from "react"
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

//ATIVIDADE 1
import Contador from "./components/Primeiras-Atividades/Contador"

//ATIVIDADE 2
import Saudacao from './components/Primeiras-Atividades/Saudacao'

//ATIVIDADE 3
import Form from "./components/Primeiras-Atividades/Form"

//ATIVIDADE 4 E 5
import InputNome from "./components/Primeiras-Atividades/InputNome"
//ATIVIDADE 6
import Formulario from "./components/Primeiras-Atividades/Formulario"
import Lista from "./components/Primeiras-Atividades/Lista"

//ATIVIDADE 9
import ContadorHistorico from "./components/Primeiras-Atividades/ContadorHistorico"

//CSS
import './App.css'

//ATIVIDADE 2 NOVA
import FormularioLivro from "./components/Atividade-2/FormularioLivro"


function App() {

  const [lista6, setLista6] = useState([]);

  const addLista6 = (novoUsuario) => {
    setLista6([...lista6, novoUsuario]);
  }

  const removerLista6 = (index) => {
    setLista6(lista6.filter((_, i) => i !== index));
  }

  return (
    <>
    <header className="header"> Atividades React </header>

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
      </section>

      <h1>Lista de Atividades</h1>
      <br />

      {/*PRIMEIRAS ATIVIDADES*/}
      {/* <h1 className="title">Atividade 1</h1>

      <div>
          <Contador />
      </div>

      <h1 className="title">Atividade 2</h1>

      <div>
        <Saudacao />
      </div>

      <h1 className="title">Atividade 3</h1>

      <div>
        <Form />
      </div>

      <h1 className="title">Atividades 4 e 5</h1>

      <div>
        <InputNome />
      </div>

      <h1 className="title">Atividades 6, 7 e 8</h1>

      <div>
        <Formulario adicionar={addLista6}/>
        <Lista lista={lista6} remover={removerLista6}/>
      </div>

      <h1 className="title">Atividade 9</h1>

      <div>
        <ContadorHistorico />
      </div> */}

      {/*ATIVIDADE 2*/}
      <div>
        <FormularioLivro />
      </div>

      <br />
      <br />

    </>

    
  )
}

export default App
