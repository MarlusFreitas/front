import styles from "./Formulario.module.css";
import Input from "./Input";
import SubmitButton from './SubmitButton'

function Formulario() {
  return (
    <form className={styles.formulario_container}>
      <Input type="text" text="Nome" name="name" placeholder="Nome" />
      <Input type="text" text="Email" name="Email" placeholder="Email" />
      <Input
        type="number"
        text="Telefone"
        name="Telefone"
        placeholder="Telefone"
      />
      <Input
        type="textarea"
        text="Mensagem"
        name="Mensagem"
        placeholder="Sua mensagem..."
      />
      <SubmitButton />
    </form>
  );
}

export default Formulario;
