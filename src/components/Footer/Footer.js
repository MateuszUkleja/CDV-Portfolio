import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
	return (
        <div id="footer">
            <div className="footer-container">
                <div className="social-icons">
                    <a href="https://www.facebook.com/mateusz.ukleja.927/"><i><FaFacebook /></i></a>
                    <a href="https://www.instagram.com/uklejaa33/"><i><FaInstagram /></i></a>
                    <a href="https://twitter.com/home?lang=pl"><i><FaSquareXTwitter /></i></a>
                    <a href="https://www.youtube.com/channel/UCararuFQrRQMVutImvV_EIA"><i><FaYoutube /></i></a>
                </div>
            </div>
            <div className="footer-nav">
                <ul>
                    <li><a href="#banner">Home</a></li>
                    <li><a href="#about">O mnie</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#project">Projekty</a></li>
                    <li><a href="#uslugi">Usługi</a></li>
                    <li><a href="#contact">Kontakt</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>Copyright &copy;2024;</p>
            </div>
        </div>
		
	)
}

export default Footer;