import './Formulario.css';
import CampoTexto from "../CampoTexto";
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = ({ times, aoCadastrar, cadastrarTime }) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('');

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    console.log('form enviado: ', nome, cargo, imagem, time);
    aoCadastrar({
      nome,
      cargo,
      imagem,
      time
    });
    // Limpa o formulário
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  }

  const aoSubmeterTime = (evento) => {
    evento.preventDefault();
    
    cadastrarTime({
      nome: nomeTime,
      cor: corTime
    });

    setNomeTime('');
    setCorTime('');
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto 
          obrigatorio
          label="Nome" 
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto 
          obrigatorio
          label="Cargo" 
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto 
          label="Imagem" 
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa 
          obrigatorio
          label="Time" 
          itens={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>
          Criar card
        </Botao>
      </form> 
      <form onSubmit={aoSubmeterTime}>
        <h2>Preencha os dados para criar um time.</h2>
        <CampoTexto 
          obrigatorio
          label="Nome" 
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <CampoTexto 
          obrigatorio
          label="Cor" 
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao>
          Criar time
        </Botao>
      </form> 
    </section>
  );
}

export default Formulario;
