import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Organizacao from './componentes/Organizacao';

function App() {
  const [times, setTimes] = useState([]);
  const [colaboradores, setColaboradores] = useState([]);
  const [colaborador, setColaborador] = useState({});
  const [visibilidade, setVisibilidade] = useState(true);

  const pegaTodosColaborades = () => {
    fetch('http://localhost:3001/colaboradores')
      .then(resposta => resposta.json())
      .then(dados => setColaboradores(dados))
      .catch(() => console.log('Erro na API'));
  }

  const pegaTodosTimes = () => {
    fetch('http://localhost:3001/times')
      .then(resposta => resposta.json())
      .then(dados => setTimes(dados))
      .catch(() => console.log('Erro na API'));
  }

  const salvaTime = (time) => {
    fetch('http://localhost:3001/times', { 
      method: 'POST',  
      body: JSON.stringify(time)
    })
    .then(resposta => resposta.json())
    .then(dados => console.log(dados))
    .catch(() => console.log('Erro na API'));
  }

  const salvaColaborador = (colaborador) => {
    fetch('http://localhost:3001/colaboradores', { 
      method: 'POST',  
      body: JSON.stringify(colaborador)
    })
    .then(() => setColaborador(colaborador))
    .catch(() => console.log('Erro na API'))
  }

  const excluirColaborador = (id) => {
    fetch(`http://localhost:3001/colaboradores/${id}`, { method: 'DELETE' })
      .then((resposta) => resposta.json())
      .then((dados) => console.log(dados))
      .catch(() => console.log('Erro na API'));

  }

  const atualizarColaborador = (colaborador) => {
    fetch(`http://localhost:3001/colaboradores/${colaborador.id}`, { 
      method: 'PUT',
      body: JSON.stringify(colaborador)
     })
      .then((resposta) => resposta.json())
      .then((dados) => console.log(dados))
      .catch(() => console.log('Erro na API'));
  }

  // Executado apenas na montagem
  useEffect(() => {
    pegaTodosTimes();
    pegaTodosColaborades();
  }, []);

  useEffect(() => {
    pegaTodosColaborades();
  }, [colaborador]);

  const mudarCorTime = (cor, id) => {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  const deletarColaborador = (id) => {
    excluirColaborador(id);
    setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id));
  }

  const cadastrarTime = (time) => {
    const novoTime = { ...time, id: uuidv4() };
    salvaTime(novoTime);
    // Caso a API esteja fora armazena o estado em memória  
    setTimes([...times, novoTime]);
  }

  const cadastrarColaborador = (colaborador) => {
    const novoColaborador = { ...colaborador, id: uuidv4() };
    salvaColaborador(novoColaborador)
    // Caso a API esteja fora armazena o estado em memória  
    setColaboradores([...colaboradores, novoColaborador])
  }

  const resolverFavorito = (id) => {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito
        atualizarColaborador(colaborador);
      };
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
          aoCadastrar={cadastrarColaborador}
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
