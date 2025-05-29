import Time from '../Time';
import './Organizacao.css';

const Organizacao = ({ 
  titulo, 
  times, 
  colaboradores, 
  aoDeletarColaborador, 
  aoFavoritarColaborador, 
  mudarCorTime, 
  aoAlternarVisibilidadeFormulario 
})  => {
  return (
    <section className='organizacao'>
      <div className='organizacao__titulo'>
        <h1>{titulo}</h1>
        <img onClick={aoAlternarVisibilidadeFormulario} src='imagens/botao-add.png' alt='Botão para ocultar formulário'/>
      </div>
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
    </section>
  );
}

export default Organizacao;
