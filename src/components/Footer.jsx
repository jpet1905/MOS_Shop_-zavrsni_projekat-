import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <p>©2021 <b>MALAodSTILA Shop</b> | by <b>Jelena Petrović</b>
                <span className="f_span"><a href="https://github.com/jpet1905"><FontAwesomeIcon icon={faGithub} /></a></span>
                <span className="f_span"><a href="https://www.linkedin.com/in/jelena-petrovic-87394721b/"><FontAwesomeIcon icon={faLinkedinIn} /></a></span> | All Rights Reserved.</p>
        </div>
    );
}

export default Footer;