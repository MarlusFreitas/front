import React from 'react';
import styles from './Contato.module.css';
import Formulario from '../Contato/Formulario';

function Contato() {
  const handleSubmit = (project) => {
    console.log('Dados do projeto:', project);
  };

  return (
    <div className={styles.contato_container}>
      <h1>Contato</h1>
      <h2>Vamos juntos construir um novo amanhã?</h2>
      <Formulario handleSubmit={handleSubmit} btnText="Enviar" />
    </div>
  );
}

export default Contato;
