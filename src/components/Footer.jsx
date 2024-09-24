/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import '../styles/Footer.css'; 

const Footer = () => {
    return ( 
        <>
            <footer>
                <Link>Mentions légales</Link>
                <Link>Politique de confidentialité</Link>
                <Link>Condition d'utilisation</Link>
            </footer>
        </>
     );
}
 
export default Footer;