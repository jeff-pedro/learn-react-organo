import'./Campo.css';

const Campo = ({ type = '', label, placeholder, obrigatorio, valor, aoAlterado }) => {

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  }

  return (
    <div className="campo">
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} value={valor} onChange={aoDigitado} placeholder={placeholder} required={obrigatorio}></input>
    </div>
  );  
}

export default Campo;
