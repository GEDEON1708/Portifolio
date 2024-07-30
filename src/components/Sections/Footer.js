import { FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import styles from './Footer.module.css'


function Footer(){
    return(
        <div className={styles.footer}>
           <ul>
                <li><a href='https://www.instagram.com/gedeon_kashomona/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/GEDEON1708'> <FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/gedeon-kashomona-5490472b6/'> <FaLinkedinIn size={30}/></a></li>
                <li><a href='https://wa.me/5584998685592'><FaWhatsapp size={30}/></a></li>
                <li><a href="mailto:gedeonkashomona@outlook.com" className={styles.email}><FaEnvelope size={30}/></a></li>
                
            </ul>
        </div>
    )
}

export default Footer