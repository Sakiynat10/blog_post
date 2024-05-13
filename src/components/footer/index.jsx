import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content container">
        <div className="footer-left">
          <p>Finstreet 118 2561 Fintown</p>
          <p>Hello@finsweet.com 020 7993 2905</p>
        </div>
        <div className="footer-right-medias">
          <a href="3">
            <FaFacebook className="media" color="#6D6E76" />
          </a>
          <a href="3">
            <FaTwitterSquare className="media" color="#6D6E76" />
          </a>
          <a href="3">
            <FaSquareInstagram className="media" color="#6D6E76" />
          </a>
          <a href="3">
            <BsLinkedin className="media" color="#6D6E76" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
