/* eslint-disable no-unused-vars */
import styles from './Presentation.module.css'
import Button1 from '../elements/Button1'
import perfil from '../../Image/projects/perfil.jpg'



function Presentation(){
    return (
        <div className={styles.presentation} id="Presentation">
            <h4><strong> Bem-vindo ao meu Portfólio </strong></h4>
            <h1> Olá, eu sou Gedeon! </h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras.<br></br>
                Como Product Manager, eu tenho o compromisso de resolver problemas<br></br>
                complexos e trazer resultados excepcionais para os negócios.<br></br>
                Meus projetos já geraram milhões de reais em receita anual <br></br>
                estou sempre em busca de novos desafios para superar.
            </p>

            <Button1 link='https://github.com/GEDEON1708' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation 