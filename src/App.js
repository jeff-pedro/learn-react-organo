import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Organizacao from './componentes/Organizacao';

function App() {
  const [times, setTimes] = useState([
    {
      nome: 'Programação', 
      cor : '#D9F7E9',
    },
    {
      nome: 'Front-End', 
      cor : '#E8F8FF',
    },
    {
      nome: 'Data Science',
      cor : '#F0F8E2',
    },
    {
      nome: 'DevOps',
      cor : '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      cor : '#FAE9F5',
    },
    {
      nome: 'Mobile',
      cor : '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      cor : '#FFEEDF',
    },
  ]); 
  
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  const mudarCorTime = (cor, nome) => {
    setTimes(times.map(time => {
      if(time.nome === nome) {
        time.cor   = cor;
      }
      return time;
    }));
  }

  const deletarColaborador = (colaborador) => {
    // const novosColaboradores = colaboradores.filter((c) => c.nome !== colaborador)
    // setColaboradores([...novosColaboradores]);
    console.log('deletando colaborador: ', colaborador);
  }

  return (
    <div>
        <Banner />
        <Formulario 
          aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
          times={times.map(time => time.nome)}
        />
        <Organizacao 
          titulo='Minha Organização:'
          times={times}
          colaboradores={colaboradores}
          aoDeletarColaborador={deletarColaborador}
          mudarCorTime={mudarCorTime}
        />
        <Rodape />
    </div>
  );
}

export default App;
