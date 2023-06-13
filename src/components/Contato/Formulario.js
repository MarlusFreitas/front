import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Formulario.module.css';
import Input from './Input';
import SubmitButton from './SubmitButton';

function Formulario({ handleSubmit, btnText, projectData }) {
  const [project, setProject] = useState(projectData || {});
  const [isDataSaved, setIsDataSaved] = useState(false);

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const history = useHistory();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(project);
    setIsDataSaved(true);
    createPost(project);
  };

  function createPost(project) {
    fetch('http://localhost:5000/contatos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('Dados enviados com sucesso:', data);
        
      })
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleSubmitForm} className={styles.formulario_container}>
      {isDataSaved && <p>Agradeço o contato, assim que possível retornarei!</p>}
      <Input
        type="text"
        text="Nome"
        name="name"
        placeholder="Nome"
        handleOnChange={handleChange}
        value={project.name || ''}
      />
      <Input
        type="text"
        text="Email"
        name="email"
        placeholder="Email"
        handleOnChange={handleChange}
        value={project.email || ''}
      />
      <Input
        type="number"
        text="Telefone"
        name="telefone"
        placeholder="Telefone"
        handleOnChange={handleChange}
        value={project.telefone || ''}
      />
      <Input
        type="textarea"
        text="Mensagem"
        name="mensagem"
        placeholder="Sua mensagem..."
        handleOnChange={handleChange}
        value={project.mensagem || ''}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default Formulario;
