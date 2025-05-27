import Time from '../Time';
import './Organizacao.css';

const Organizacao = ({ titulo, times, colaboradores, aoDeletarColaborador })  => {
  return (
    <details className='organizacao' open>
      <summary>{titulo}</summary>
        {/* Lista de Times */}
        {times.map(time => 
          <Time 
            key={time.nome}
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletarColaborador={aoDeletarColaborador}
          />
        )}
    </details>
  );
}

export default Organizacao;
