import { useRef } from "react";
import style from "../styles/contact.module.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs
      .sendForm(
        "service_rw67os7",
        "template_sk71box",
        form.current,
        "Go_a6QPiJFZDR2nws"
      )
      .then(
        (result) => {
          alert("Message Sent!");
        },
        (error) => {
          alert("Message Not Sent!");
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className={style.contact__container}>
        <div className={style.contact__options}>
          {/* Email */}
          <article className={style.contact__option}>
            <MailOutlineIcon fontSize="small" className={style.contact__optionIcon} />
            <h4>Email</h4>
            <h5>devshaad@gmail.com</h5>
            <a href="mailto:devshaad@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          {/* Messenger */}
          <article className={style.contact__option}>
            <InstagramIcon fontSize="small" className={style.contact__optionIcon} />
            <h4>Instagram</h4>
            <h5>@dev_shad</h5>
            <a href="https://instagram.com/dev_shad" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          {/* WhatsApp */}
          <article className={style.contact__option}>
            <TwitterIcon fontSize="small" className={style.contact__optionIcon} />
            <h4>Twitter</h4>
            <h5>@dev_shad</h5>
            <a href="https://twitter.com/dev_shad" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>

        {/* Contact Form  */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
