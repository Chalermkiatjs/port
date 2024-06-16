import "style/footer.css";
import "style/contact.css";
import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialInstagram,
} from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
function Footer() {
  return (
    <>
      <section>
        <div className="container-contact" id="contact">
          <div className="flex-header-contact">
            <h1>CONTACT</h1>
          </div>

          <div className="flex-container-contact">
            <div className="flex-items-contact">
              <a
                href="https://www.facebook.com/chalermkiat.jaisuk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialFacebook />
                <p>Facebook</p>
              </a>
            </div>
            <div className="flex-items-contact">
              <a
                href="https://www.instagram.com/cha_lermm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialInstagram />
                <p>Instagram</p>
              </a>
            </div>
            <div className="flex-items-contact">
              <a
                href="https://github.com/Chalermkiatjs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialGithub />
                <p>Github</p>
              </a>
            </div>
            <div
              className="flex-items-contact"
              onClick={() => "mailto:chalermkiat.js@gmail.com"}
            >
              <div>
                <a href="mailto:chalermkiat.js@gmail.com">
                  <AiOutlineMail />
                  <p>G-mail</p>
                </a>
              </div>
            </div>
            <div className="flex-items-contact">
              <div>
                <BsTelephone />
                <p>095-525-4411</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>Created by Chalermkiat Jaisuk | ©2023 All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Footer;
