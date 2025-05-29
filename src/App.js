import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Organizacao from './componentes/Organizacao';

function App() {
  const [times, setTimes] = useState([]);
  const [colaboradores, setColaboradores] = useState([]);
  const [visibilidade, setVisibilidade] = useState(true);

  const pegaTodosColaborades = () => {
    fetch('http://localhost:3001/colaboradores')
    .then(resposta => resposta.json())
    .then(dados => setColaboradores(dados));
  }

  const pegaTodosTimes = () => {
    fetch('http://localhost:3001/times')
    .then(resposta => resposta.json())
    .then(dados => setTimes(dados))
  }

  useEffect(() => {
    pegaTodosTimes();
    pegaTodosColaborades();    
  }, []);

  const mudarCorTime = (cor, id) => {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  const deletarColaborador = (id) => {
    setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id));
  }

  const cadastrarTime = (time) => {
    setTimes([...times, { ...time, id: uuidv4() } ]);
  } 

  const resolverFavorito = (id) => {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }));
  }

  const alternarVibilidadeFormulario = () => {
    setVisibilidade(visibilidade => !visibilidade);
  }

  return (
    <div>
        <Banner />
        <Formulario
          ehVisivel={visibilidade}
          cadastrarTime={cadastrarTime}
          times={times.map(time => time.nome)}
          aoCadastrar={colaborador => setColaboradores([...colaboradores, { ...colaborador, id: uuidv4() }])}
        />
        <Organizacao 
          titulo='Minha Organização:'
          times={times}
          colaboradores={colaboradores}
          aoDeletarColaborador={deletarColaborador}
          aoFavoritarColaborador={resolverFavorito}
          mudarCorTime={mudarCorTime}
          aoAlternarVisibilidadeFormulario={alternarVibilidadeFormulario}
        />
        <Rodape />
    </div>
  );
}

export default App;
