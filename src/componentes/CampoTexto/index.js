import'./CampoTexto.css';

const CampoTexto = ({ label, placeholder, obrigatorio, valor, aoAlterado }) => {

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  }

  return (
    <div className="campo-texto">
      <label htmlFor={label}>{label}</label>
      <input id={label} value={valor} onChange={aoDigitado} type="text" placeholder={placeholder} required={obrigatorio}></input>
    </div>
  );  
}

export default CampoTexto;
