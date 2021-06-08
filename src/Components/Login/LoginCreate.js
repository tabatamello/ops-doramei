import React from 'react';
import Logo from '../../assets/logo1.png';
import Input from '../Form/Input';
import Button from '../Form/Button';
import styles from './LoginCreate.module.css';

const LoginCreate = () => {
  return (
    <div className="animeLeft">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <form>
        <Input label="Nome Completo" type="text" name="nome" />
        <Input label="Nome Usuário" type="text" name="nomeUsuario" />
        <Input label="Senha" type="password" name="password" />
        <Input label="Email" type="email" name="email" />
        <div className={styles.botao}>
          <Button>Cadastra-se</Button>
          <Button className={styles.cancelar}>Cancelar</Button>
        </div>
      </form>
    </div>
  );
};
export default LoginCreate;
