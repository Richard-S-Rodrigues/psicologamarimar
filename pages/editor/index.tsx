import TextEditor from "../../components/TextEditor";

import styles from "./index.module.css";

const Editor = () => {
  return (
    <div className={styles.container}>
      <main>
        <form>
          <section className={styles.titleContainer}>
            <div>
              <label htmlFor="title">Título</label>
              <input type="text" name="title" id="title" />
            </div>
          </section>
          <section className={styles.bodyContainer}>
            <TextEditor />
          </section>
          <button type="submit">Enviar</button>
        </form>
      </main>
    </div>
  );
};

export default Editor;
