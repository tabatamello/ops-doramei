import React from 'react';
const validacao = {};

const useForm = () => {
  const [value, setValue] = React.useState('');

  function onChange({ target }) {
    setValue(target.value);
  }
  return <div>value, setValue, onChange</div>;
};

export default useForm;
