import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
  const style = {
    backgroundColor: corSecundaria,
  };

  return (
    (colaboradores.length > 0) && (
      <section className='time' style={style}>
      <h3>{nome}</h3>
      <hr style={{ backgroundColor: corPrimaria }} />
      <div className='colaboradores'>
        {colaboradores.map(colaborador => 
          <Colaborador 
            key={colaborador.nome}
            nome={colaborador.nome}  
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            corDeFundo={corPrimaria}
          />
        )}
      </div>
    </section>)
  );
}

export default Time;
