import './Formulario.css';
import CampoTexto from "../CampoTexto";

const Formulario = () => {
  return (
    <section className='formulario'>
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />

        {/* <div>
          <label for="select-time">Time</label>
          <select name="select-time">
            <option value="programacao">Programação</option>
            <option value="front-end">Front-End</option>
            <option value="back-end">Back-End</option>
            <option value="data-science">Data Science</option>
          </select>
        </div>
        <button type="submit">Criar card</button> */}
      </form> 
    </section>
  );
}

export default Formulario;
