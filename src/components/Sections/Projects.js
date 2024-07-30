/* eslint-disable no-unused-vars */
import Button2 from '../elements/Button2'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../Image/projects/lpdnc.png'
import taskmenag from '../../Image/projects/taskmenag.png'
import okparq from '../../Image/projects/okparq.png'
import imc from '../../Image/projects/imc.png'


function Projects(){
    return(
    <div className={styles.projects} id="Projects">
        <h1> Projetos</h1>
        <Card
        img={lpdnc}
        title="LP - DNC"
        tech="HTML, CSS e JS"
        description="Desenvolvimento do módulo de base de curso de Tecnologia a Escola DNC."
        repo="https://github.com/GEDEON1708/projeto-lading-page"
        site="https://my-repos-3fd67051y-gedeon-kashomonas-projects.vercel.app/"
        />


        <Card
        img={taskmenag}
        title="Task Menager"
        tech="HTML, CSS, JS e React (vite)"
        description="Desenvolvimento do um sistema para afim de ajudar os usuários a gerenciar suas tarefas diárias de forma simples e eficiente."
        repo="https://github.com/GEDEON1708/Task-Manager-todo-list"
        site="https://task-manager-todo-list.vercel.app/"        
        />


        <Card
        img={okparq}
        title="OKAPI ARQUITETURA"
        tech="HTML, CSS e JS"
        description="Uma Landing-Page de uma empresa de Arquitetura ficticia"
        repo="https://github.com/GEDEON1708/projeto-lading-page-dsf1"
        site="https://okapiarquitetura.netlify.app/"    
        />


        <Card
        img={imc}
        title="Calculadora de IMC"
        tech="HTML, CSS e JS"
        description="Uma calculadora de IMC"
        repo="https://github.com/GEDEON1708/Calculadora-IMC"
        site="https://ocf-imcquick.vercel.app/"
        />
    </div>
    )
}

export default Projects