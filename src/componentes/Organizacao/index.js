import Time from '../Time';
import './Organizacao.css';

const Organizacao = ({ titulo, times, colaboradores, aoDeletarColaborador, aoFavoritarColaborador, mudarCorTime })  => {
  return (
    <details className='organizacao' open>
      <summary>{titulo}</summary>
        {/* Lista de Times */}
        {times.map(time => 
          <Time 
            key={time.id}
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletarColaborador={aoDeletarColaborador}
            aoFavoritarColaborador={aoFavoritarColaborador}
            mudarCor={mudarCorTime}
          />
        )}
    </details>
  );
}

export default Organizacao;
