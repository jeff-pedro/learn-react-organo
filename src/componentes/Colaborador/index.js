import { AiFillCloseCircle } from "react-icons/ai";
import './Colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
  return (
    <div className='colaborador'>
      <AiFillCloseCircle 
        size={25} 
        className='colaborador__deletar' 
        onClick={() => aoDeletar(colaborador.id)} 
      />
      <div className='colaborador__cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className='colaborador__rodape'>
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
      </div>
    </div>
  );
}

export default Colaborador;
