import {
  FaGithub,
  FaGoogle,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMobile,
} from "react-icons/fa";
import Contact from "./Contact";
import Divider from "./Divider";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container" id="contact">
      <div className="container__content footer__content">
        <h2>Stay in Touch</h2>
        <div className="footer__top">
          <div className="footer__top__left">
            <FooterCard icon={<FaMobile />} text="+92-123456789" />
            <FooterCard icon={<FaHome />} text="Faisalabad Paskistan" />
            <FooterCard icon={<FaGoogle />} text="momnadev533gb@gmail.com" />
          </div>
          <div className="footer__top__right">
            <Contact />
          </div>
        </div>
        <Divider />
        <div className="footer__bottom">
          <p>
            COPYRIGHT©2023 <span> MOMNA IJAZ</span> ALL RIGHTS RESERVED
          </p>
          <div className="footer__social__links">
            <a
              href="https://www.linkedin.com/in/momnaijaz/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Momna533"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/momna_ijaz_/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@momna_ijaz"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const FooterCard = ({ icon, text }) => {
  return (
    <div className="footer__card">
      <div className="icon">{icon}</div>
      <h4>{text}</h4>
    </div>
  );
};
