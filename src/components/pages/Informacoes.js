import styles from './Informacoes.module.css';
import imagem from '../../img/Informacoes.png';
import arquivoPDF from '../../img/Curriculo.pdf';

function Informacoes() {
  return (
    <section className={styles.informacoes_container}>
      <div className={styles.image_column}>
        <img src={imagem} alt="Imagem" />
      </div>
      <div className={styles.info_column}>
        <h2>Hello, I am Marlus Freitas</h2>
        <p>Aqui teria uma descrição ou um roadmap com cursos e experiencias na área.</p>
        <ul>
          <li><strong className={styles.info_coluna}>Nome:</strong> Marlus Freitas</li>
          <li><strong className={styles.info_coluna}>Idade:</strong> 30</li>
          <li><strong className={styles.info_coluna}>Endereço:</strong> Natal/RN</li>
          <li><strong className={styles.info_coluna}>Telefone:</strong> (84) 99701-8496</li>
          <li><strong className={styles.info_coluna}>Email:</strong> marlus_fox@hotmail.com</li>
        </ul>
        <button className={styles.download_button}>
            <a href={arquivoPDF} download>
                <button className={styles.download_button}>Download CV</button>
            </a>
        </button>
      </div>
    </section>
  );
}

export default Informacoes;
