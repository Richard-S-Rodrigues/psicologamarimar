import type { NextPage } from "next";
import { useState } from "react";
import ReactLoading from "react-loading";

import styles from "./index.module.css";

const Contact: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");

  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = (event: any) => {
    event.preventDefault();

    if (!name || !email || !tel || !message) return;

    const data = {
      name,
      email,
      tel,
      message,
    };

    setIsLoading(true);

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 201) {
          console.log("Email sent!");

          setIsSent(true);

          setName("");
          setEmail("");
          setTel("");
          setMessage("");

          setIsLoading(false);
        }
      })
      .catch((error) => {
        setIsError(true);
      });
  };

  return (
    <div className={styles.container}>
      {isSent && (
        <div className={`${styles.success} ${styles.hide}`}>
          Dúvida enviada com sucesso!
        </div>
      )}
      {isError && (
        <div className={`${styles.fail} ${styles.hide}`}>
          Algo deu errado. Tente novamente!
        </div>
      )}
      <main>
        <div className={styles.formContainer}>
          <h2>Você pode tirar suas dúvidas pelo formulário</h2>
          <form onSubmit={onSubmitHandler}>
            <div>
              <label htmlFor="name">NOME*</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">E-MAIL*</label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="tel">CELULAR*</label>
              <input
                type="text"
                name="tel"
                id="tel"
                value={tel}
                onChange={(event) => setTel(event.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message">MENSAGEM*</label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </div>
            <button type="submit">ENVIAR</button>
          </form>
          {isLoading && (
            <ReactLoading
              type="bubbles"
              color="#053E6B"
              height={"200px"}
              width={"200px"}
            />
          )}
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
};

export default Contact;
