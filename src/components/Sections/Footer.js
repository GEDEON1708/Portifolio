import { FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import styles from './Footer.module.css'


function Footer(){
    return(
        <div className={styles.footer}>
           <ul>
                <li><a href='https://www.instagram.com/gedeon_kashomona/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/GEDEON1708'> <FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/gedeon-kashomona-5490472b6/'> <FaLinkedinIn size={30}/></a></li>
                <li><a href='https://wa.me/5584998685592'><FaWhatsapp size={30}/></a></li>
                
            </ul>
            <p>gedeonkashomona@outlook.com</p>
        </div>
    )
}

export default Footer