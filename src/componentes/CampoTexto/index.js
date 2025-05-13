import { useState } from 'react';
import'./CampoTexto.css';

const CampoTexto = ({ label, placeholder, obrigatorio, valor, aoAlterado }) => {

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  }

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input value={valor} onChange={aoDigitado} type="text" placeholder={placeholder} required={obrigatorio}></input>
    </div>
  );  
}

export default CampoTexto;
