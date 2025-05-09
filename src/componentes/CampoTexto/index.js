import'./CampoTexto.css';

const CampoTexto = (props) => {
  const { label, placeholder } = props;
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input type="text" placeholder={placeholder}></input>
    </div>
  );  
}

export default CampoTexto;
