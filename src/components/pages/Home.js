import styles from "./Home.module.css";
import imagem from "../../img/Home.png";

function Home() {
  return (
    <section className={styles.home_container}>
      <div classeName={styles.text_column}>
        <h1><span>Projeto_A3</span></h1>
      </div>
      <p>
        Olá, meu nome é Marlus Roberto e sou um profissional de Tecnologia da
        Informação (TI) apaixonado por aprendizado e desenvolvimento.
        Atualmente, estou me dedicando aos estudos nessa área em busca de
        aprimorar minhas habilidades e conhecimentos. Meu objetivo com este
        projeto é colocar em prática o que tenho aprendido, criando soluções e
        aplicativos que possam contribuir para o avanço tecnológico e o
        bem-estar das pessoas. Estou em busca de oportunidades para aplicar
        minhas competências e colaborar com equipes talentosas e inovadoras.
        Seja bem-vindo(a) e acompanhe meu trabalho nesta jornada rumo ao sucesso
        na área de TI.
      </p>
      <div>
        <img src={imagem} alt="imagem" />
      </div>
    </section>
  );
}

export default Home;
