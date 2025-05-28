import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import './Colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
  const favoritar = () => {
    aoFavoritar(colaborador.id);
  }

  const propsFavoritos = {
    size: 25,
    onClick: favoritar
  }

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
        <div className='favoritar'>
          {colaborador.favorito 
            ? <AiFillHeart {...propsFavoritos} color="#ff0000" /> 
            : <AiOutlineHeart {...propsFavoritos} />}
        </div>
      </div>
    </div>
  );
}

export default Colaborador;
