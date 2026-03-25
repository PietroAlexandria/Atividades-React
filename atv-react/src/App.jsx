import { useState } from "react"
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

//ATIVIDADE 1
import Contador from "./components/Contador"

//ATIVIDADE 2
import Saudacao from './components/Saudacao'

//ATIVIDADE 3
import Form from "./components/Form"

//ATIVIDADE 4 E 5
import InputNome from "./components/InputNome"
//ATIVIDADE 6
import Formulario from "./components/Formulario"
import Lista from "./components/Lista"

//CSS
import './App.css'
import ContadorHistorico from "./components/ContadorHistorico"

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
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
      </section>

      <h1>Lista de Atividades</h1>
      <br />
      <h1 className="title">Atividade 1</h1>

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
      </div>

      <br />
      <br />

    </>

    
  )
}

export default App
