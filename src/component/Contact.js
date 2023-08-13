import "./contact.css"
import { SlSocialFacebook, SlSocialGithub, SlSocialInstagram } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

function Contact(){

    return(
        <section>
            <div className="container-contact">
                <div className="flex-header-contact">
                    <h1>CONTACT</h1>
                </div>

                    <div className="flex-container-contact">  
                        <div className="flex-items-contact">
                            <SlSocialFacebook/>
                            <p>Chalermkiat Jaisuk</p>
                        </div>
                        <div className="flex-items-contact">
                            <SlSocialInstagram/>
                            <p>cha_lermm</p>
                        </div>
                        <div className="flex-items-contact">
                            <SlSocialGithub/>
                            <p>https://github.com/Chalermkiatjs</p>
                        </div>
                        <div className="flex-items-contact">
                            <AiOutlineMail/>
                            <p>chalermkiat.js@gmail.com</p>
                        </div>
                        <div className="flex-items-contact">
                            <BsTelephone/>
                            <p>095-525-4411</p>
                        </div>
                    </div>
            </div>
        </section>
    );
    
}

export default Contact;