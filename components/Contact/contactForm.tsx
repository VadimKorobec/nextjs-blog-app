import { useEffect, useState } from "react";
import styles from "./contactForm.module.css";
import { Message } from "@/types/message";
import Notification from "../Ui/notification";

const sendContactData = async (contactDetails: Message) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
};

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredMessage, setEnteredMessage] = useState<string>("");
  const [requestStatus, setRequestStatus] = useState<
    "pending" | "success" | "rejected" | null
  >(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "rejected") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

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

  const handleSendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      reset();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong");
      }
      setRequestStatus("rejected");
    }

    
  };

  const reset = () => {
    setEnteredEmail("");
    setEnteredName("");
    setEnteredMessage("");
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message send successfully!",
    };
  }

  if (requestStatus === "rejected") {
    notification = {
      status: "rejected",
      title: "Success!",
      message: error,
    };
  }

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
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
