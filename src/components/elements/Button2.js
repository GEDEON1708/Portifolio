import styles from './Button2.module.css'

function Button2({text, link}){
    return(
        <div>
            <a href='https://github.com/GEDEON1708?tab=repositories'>
                <button className={styles.btn}> {text}</button>
            </a>
        </div>
    )
}

export default Button2