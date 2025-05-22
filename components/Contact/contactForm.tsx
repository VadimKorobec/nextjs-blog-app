import { useState } from "react";
import styles from "./contactForm.module.css";

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredMessage, setEnteredMessage] = useState<string>("");

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setEnteredEmail(email);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setEnteredName(name);
  };

  const handleChangeMessage = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const message = event.target.value;
    setEnteredMessage(message);
  };

  const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    reset();
  };

  const reset = () => {
    setEnteredEmail("");
    setEnteredName("");
    setEnteredMessage("");
  };

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form onSubmit={handleSendMessage} className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={handleChangeEmail}
              required
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={handleChangeName}
              required
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            value={enteredMessage}
            onChange={handleChangeMessage}
            rows={5}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
