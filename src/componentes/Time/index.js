// import { useState } from 'react';
import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({ time, colaboradores, aoDeletarColaborador, mudarCor }) => {
  const style = {
    backgroundColor: time.corSecundaria,
  };

  return (
    (colaboradores.length > 0) && (
      <section className='time' style={style}>
        <input value={time.corSecundaria} onChange={evento => mudarCor(evento.target.value, time.nome)} type='color' className='input-cor' />
        <h3>{time.nome}</h3>
        <hr style={{ backgroundColor: time.corPrimaria }} />
        <div className='colaboradores'>
          {colaboradores.map(colaborador =>
              <Colaborador 
                key={colaborador.nome}
                nome={colaborador.nome}  
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                corDeFundo={time.corPrimaria}
                aoDeletar={aoDeletarColaborador}
              />
          )}
        </div>
      </section>)
  );
}

export default Time;
