import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({ time, colaboradores, aoDeletarColaborador, aoFavoritarColaborador, mudarCor }) => {
  const style = {
    backgroundImage: 'url(/imagens/fundo.png)',
    backgroundColor: hexToRgba(time.cor, '0.5'),
  };

  return (
    (colaboradores.length > 0) && (
      <section className='time' style={style}>
        <input value={time.cor} onChange={ evento => mudarCor(evento.target.value, time.id) } type='color' className='input-cor' />
        <h3>{time.nome}</h3>
        <hr style={{ backgroundColor: hexToRgba(time.cor, '0.6')}} />
        <div className='colaboradores'>
          {colaboradores.map(colaborador =>
              <Colaborador 
                key={colaborador.id}
                colaborador={colaborador}
                corDeFundo={time.cor}
                aoDeletar={aoDeletarColaborador}
                aoFavoritar={aoFavoritarColaborador}
              />
          )}
        </div>
      </section>)
  );
}

export default Time;
