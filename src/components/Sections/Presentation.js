/* eslint-disable no-unused-vars */
import styles from './Presentation.module.css'
import Button1 from '../elements/Button1'



function Presentation(){
    return (
        <div className={styles.presentation} id="Presentation">
            <h4><strong> Bem-vindo ao meu Portfólio </strong></h4>
            <h1> Olá, eu sou Gedeon! </h1>
            <p>
                Sou estudante de Ciência e Tecnologia na Universidade Federal do Rio Grande do Norte,<br></br>
                focado em programação frontend. Aspiro me tornar um programador fullstack, sempre<br></br>buscando conhecimento e novos desafios. Além do curso superior, estudo constantemente<br></br> em plataformas de programação. Minha paixão por tecnologia e soluções inovadoras me<br></br> impulsiona a crescer e contribuir significativamente em projetos de desenvolvimento.
            </p>

            <Button1 link='https://github.com/GEDEON1708' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation 