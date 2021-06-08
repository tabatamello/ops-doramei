import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name, value, setValue, onChange }) => {
  return (
    <div>
      <label className={styles.label} htmlFor="{name}">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        onChange={onChange}
        value={value}
      ></input>
    </div>
  );
};

export default Input;
