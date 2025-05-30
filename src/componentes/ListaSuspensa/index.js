import './ListaSuspensa.css'

const ListaSuspensa = ({ label, valor, itens, obrigatorio, aoAlterado }) => {
  return (
    <div className="lista-suspensa">
      <label htmlFor={label}>{label}</label>
      <select 
        id={label}
        onChange={(evento) => { aoAlterado(evento.target.value) }} 
        required={obrigatorio}
        value={valor}
      >
        <option value="">Selecione...</option>
        { itens.map(item => <option key={item.id}>{item}</option>) }
      </select>
    </div>
  );
}

export default ListaSuspensa;
