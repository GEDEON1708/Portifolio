/* eslint-disable jsx-a11y/alt-text */
import styles from './Skills.module.css'
import javascript from '../../Image/skills/javascript.svg'
import html from '../../Image/skills/html.svg'
import css from '../../Image/skills/css.svg'
import react from '../../Image/skills/react.svg'
import typescript from '../../Image/skills/typescript.svg'

function Skills(){
    return(
        <div className={styles.skills} id="Skills"> 
            <h1> Habilidades </h1>
            <p> Conheça um pouco das minhas principais habilidades e conhecimentos. </p>

            <div>
                <img src={javascript}></img>
                <img src={html}></img>
                <img src={css}></img>
                <img src={react}></img>
                <img src={typescript}></img>
            </div>
        </div>
    )
}

export default Skills