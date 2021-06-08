import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import styles from './LoginForm.module.css';
import Logo from '../../assets/logo1.png';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  function handleSubmit(event) {
    event.preventDefault();
    fetch('rota de login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify(),
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }
  return (
    <section className="animeLeft">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>

      <div className={styles.cadastro}>
        <p>Ainda não tem cadastro? Cadastre-se</p>
        <Link className={styles.buttonCriar} to="/login/cadastrar">
          Cadastre-se
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
