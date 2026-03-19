import React, { useState } from 'react';

export default function Saudacao({ input, setInput, onAdicionar}) {
    const [nome, setNome] = useState('');
    const handleInputChange = (event) => {
    setNome(event.target.value);
  };

    return (
        <div>
      <label>
        Digite seu nome: {' '}
        <input 
          type="text" 
          value={nome} 
          onChange={handleInputChange} 
          placeholder="Digite seu nome"
        />
      </label>
      
      <br />
      <br />

      <p>Olá {nome}, seja bem vindo ao REACT</p>
      
    </div>
    )
}