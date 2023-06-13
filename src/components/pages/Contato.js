import styles from './Contato.module.css'
import Formulario from '../Contato/Formulario'

function Contato(){
    return (
        <div className={styles.contato_container}>
            <h1>Contato</h1>
            <h2>Vamos juntos construir um novo amanhã?</h2>
            <Formulario />
        </div>
    )
}

export default Contato