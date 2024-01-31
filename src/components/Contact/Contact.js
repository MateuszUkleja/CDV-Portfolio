import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import "./contact.css"

function Contact() {
	return (
      
        <div id="contact">
            <h1 className="contact-title">Kontakt</h1>
            <div className="contact-container">
                <div className="find-me">
                    <div className="find-items">
                    <h3 className="find-title">Find me</h3>
                    <p className="find-text"><MdOutlineEmail /> Email: ukleja1@gmail.com</p>
                    <p className="find-text"><CiPhone /> Tel: +48 601 560 881</p>
                    </div>
                </div>
                <div className="form">
                    <div className="form-up">
                        <input type="text" className="form-input-up" placeholder="Name"></input>
                        <input type="text" className="form-input-up" placeholder="Email"></input>
                    </div>
                    
                    
                    <textarea className="text-area" placeholder="Message">
                    </textarea>
                    <button className="btn">Wyślij</button>
                </div>

            </div>
       </div>
        
		
	)
}

export default Contact;