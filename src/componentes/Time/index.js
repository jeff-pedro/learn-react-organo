import { useState } from 'react';
import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores, aoDeletarColaborador }) => {
  const [backgroundColor, setBackgroundColor] = useState(corSecundaria);
  
  const style = {
    backgroundColor,
  };

  const trocaCorBackround = (e) => {
    e.preventDefault();
    setBackgroundColor(e.target.value);
  }

  return (
    (colaboradores.length > 0) && (
      <section className='time' style={style}>
        <input value={backgroundColor} onChange={trocaCorBackround} type='color' className='input-cor' />
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
                aoDeletar={aoDeletarColaborador}
              />
          )}
        </div>
      </section>)
  );
}

export default Time;
