import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="fade-in">
      <h2>Contact Me</h2>

      <form className="contact-form scale-in">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" />
        <button type="submit">Send</button>
      </form>

      {/* Sosial Media Links */}
      <div className="social-links">
        <a
          href="https://github.com/Nadipip" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social github"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://instagram.com/nadiskk_" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social instagram"
        >
          <FaInstagram /> Instagram
        </a>
      </div>
    </section>
  );
}
