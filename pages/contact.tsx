import ContactForm from "@/components/Contact/contactForm";
import Head from "next/head";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your message!" />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
