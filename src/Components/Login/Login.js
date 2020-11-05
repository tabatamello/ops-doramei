import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login/*" element={<LoginCreate />} />
      </Routes>
    </div>
  );
};

export default Login;
