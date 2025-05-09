function Form() {
  return (
    <form>
      <h1>Preencha os dados para criar o card do colaborador.</h1>
      <div>
        <label for="input-name" >Nome</label>
        <input type="text" name="input-name" placeholder="Digite seu nome"></input>
      </div>
      <div>
        <label for="input-cargo" >Cargo</label>
        <input type="text" name="input-cargo" placeholder="Digite seu cargo"></input>
      </div>
      <div>
        <label for="input-imagem" >Imagem</label>
        <input type="text" name="input-imagem" placeholder="Informe o endereço da sua imagem"></input>
      </div>
      <div>
        <label for="select-time">Time</label>
        <select name="select-time">
          <option value="programacao">Programação</option>
          <option value="front-end">Front-End</option>
          <option value="back-end">Back-End</option>
          <option value="data-science">Data Science</option>
        </select>
      </div>
      <button type="submit">Criar card</button>
    </form> 
  );
}

export default Form;
