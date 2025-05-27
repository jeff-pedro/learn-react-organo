import Time from '../Time';
import './Organizacao.css';

const Organizacao = ({ titulo, times, colaboradores, aoDeletarColaborador, mudarCorTime })  => {
  return (
    <details className='organizacao' open>
      <summary>{titulo}</summary>
        {/* Lista de Times */}
        {times.map(time => 
          <Time 
            key={time.nome}
            time={time}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletarColaborador={aoDeletarColaborador}
            mudarCor={mudarCorTime}
          />
        )}
    </details>
  );
}

export default Organizacao;
