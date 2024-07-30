import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import {Nav} from 'react-bootstrap';

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href="#Presentation">Apresentação</Nav.Link></li>

                <li> <Nav.Link href="#Skills"> Habilidades</Nav.Link></li>
                
                <li> <Nav.Link href="#Projects">Projetos</Nav.Link> </li>
            </ul>

            <ul>
                <li><a href='https://www.instagram.com/gedeon_kashomona/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/GEDEON1708'> <FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/gedeon-kashomona-5490472b6/'> <FaLinkedinIn size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar