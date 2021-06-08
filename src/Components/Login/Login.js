import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.forms}>
        <div className={styles.formsCentralizar}>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/login/*" element={<LoginCreate />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Login;
