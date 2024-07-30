import styles from './Card.module.css'
import Button2 from './Button2'


function Card({img, title, tech, description, repo, site}){
    return(
        <div className={styles.card}>
           <a href={site}>
           <img src={img} alt='Erro!'/>
           </a>

           <section>
            <h3>{title}</h3>
            <p> <strong> tecnologia: </strong> {tech}</p>
            <p> {description} </p>
            <Button2 text='Acesse o repositório' link={repo}/>
           </section>
        </div>
    )
}

export default Card