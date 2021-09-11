import styles from "./index.module.css";

const Contact = () => (
  <div className={styles.container}>
    <main>
      <div className={styles.formContainer}>
        <h2>Você pode tirar suas dúvidas pelo formulário</h2>
        <form>
          <div>
            <label htmlFor="name">NOME</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">E-MAIL</label>
            <input type="text" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="tel">CELULAR</label>
            <input type="text" name="tel" id="tel" />
          </div>
          <div>
            <label htmlFor="message">MENSAGEM</label>
            <textarea name="message" id="message" />
          </div>
          <button>ENVIAR</button>
        </form>
      </div>
      <div className={styles.contactContainer}>
        <h2>Ou mandar mensagem diretamente por e-mail ou WhatsApp:</h2>
        <ul>
          <li>marimarnascimento@gmail.com</li>
          <li>(21) 97400-9839</li>
        </ul>
      </div>
    </main>
  </div>
);

export default Contact;
