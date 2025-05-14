import './Rodape.css';

const Rodape = () => {
  return (
    <footer className='rodape'>

      <section className='social'>
        <ul>
          <li>
            <a href='facebook.com'>
              <img src='/imagens/fb.png' alt='Facebook' />
            </a>
          </li>
          <li>
            <a href='twiter.com' target='_blank'>
              <img src='/imagens/tw.png' alt='Twiter/X' />
            </a>
          </li>
          <li>
            <a href='instagram.com' target='_blank'>
              <img src='/imagens/ig.png' alt='Instagram' />
            </a>
          </li>
        </ul>
      </section>

      <section>
        <img src='/imagens/logo.png' alt='Organo' />
      </section>
      
      <section>
        <p>Desenvolvido por Jefferson Pedro.</p>
      </section>
    </footer>
  );
}

export default Rodape;
