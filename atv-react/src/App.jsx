import { useState } from "react"
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Contador from "./components/Contador"
import Saudacao from './components/Saudacao'
import Form from "./components/Form"
import './App.css'

function App() {

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

      <h1 className="title">Atividade 4</h1>

      <div>
        
      </div>

    </>

    
  )
}

export default App
