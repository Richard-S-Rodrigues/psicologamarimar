import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { AsYouType } from "libphonenumber-js";
import ReactLoading from "react-loading";

import styles from "./index.module.css";

const Contact: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phoneNumber":
        setPhoneNumber(Utils.formatPhoneNumber(value));
        break;
      case "message":
        setMessage(value);
        break;
      default:
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
    }
  };

  const onSubmitHandler = (event: any) => {
    event.preventDefault();

    if (!name || !email || !message) return;

    const data = {
      name,
      email,
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

          setName("");
          setEmail("");
          setPhoneNumber("");
          setMessage("");

          setIsSent(true);

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

      value = new AsYouType("BR").input(value).trim();

      if (value.split("").length > 15) return;

      return value;
    },
  };

  return (
    <>
      <Head>
        <title>Psicóloga Marimar - Contato</title>
      </Head>
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
                  onChange={onChangeHandler}
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
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber">CELULAR</label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="(00) 00000-0000"
                  value={phoneNumber}
                  maxLength={15}
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <label htmlFor="message">MENSAGEM*</label>
                <textarea
                  name="message"
                  id="message"
                  value={message}
                  onChange={onChangeHandler}
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
    </>
  );
};

export default Contact;
