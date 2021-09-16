import type { NextPage } from "next";
import { useState } from "react";
import ReactLoading from "react-loading";

import styles from "./index.module.css";

const Contact: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = (event: any) => {
    event.preventDefault();

    if (!name || !email || !phoneNumber || !message) return;

    const data = {
      name,
      email,
      tel,
      phoneNumber,
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
          setPhoneNumber("");
          setMessage("");

          setIsLoading(false);
        }
      })
      .catch((error) => {
        setIsError(true);
      });
  };

  const Utils = {
    formatPhoneNumber(value: string) {
      value = value.replace(/\D/g, "");

      return value;
    },
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
          <h2>Tire suas dúvidas pelo formulário</h2>
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
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">CELULAR*</label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                maxLength={11}
                value={phoneNumber}
                onChange={(event) => {
                  setPhoneNumber(Utils.formatPhoneNumber(event.target.value));
                }}
                required
              />
            </div>
            <div>
              <label htmlFor="tel">TELEFONE</label>
              <input
                type="text"
                name="tel"
                id="tel"
                maxLength={10}
                value={tel}
                onChange={(event) => setTel(event.target.value)}
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
          <h2>Ou mande mensagem para:</h2>
          <ul>
            <li>
              <h3>E-mail</h3>
              <p>marimarnascimento@gmail.com</p>
            </li>

            <li>
              <h3>Whatsapp</h3>
              <p>(21) 97400-9839</p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Contact;
