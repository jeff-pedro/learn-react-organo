import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({ time, colaboradores, aoDeletarColaborador, mudarCor }) => {
  const style = {
    backgroundImage: 'url(/imagens/fundo.png)',
    backgroundColor: hexToRgba(time.cor, '0.6'),
  };

  return (
    (colaboradores.length > 0) && (
      <section className='time' style={style}>
        <input value={time.cor} onChange={evento => mudarCor(evento.target.value, time.nome)} type='color' className='input-cor' />
        <h3>{time.nome}</h3>
        <hr style={{ backgroundColor: hexToRgba(time.cor, '0.6')}} />
        <div className='colaboradores'>
          {colaboradores.map(colaborador =>
              <Colaborador 
                key={colaborador.nome}
                nome={colaborador.nome}  
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                corDeFundo={time.cor}
                aoDeletar={aoDeletarColaborador}
              />
          )}
        </div>
      </section>)
  );
}

export default Time;
