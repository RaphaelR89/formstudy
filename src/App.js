import React, { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  //tambem tem a errors mas n utilizei
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    //não é mais necessário!
    //   e.preventDefault();
    //   const data = {
    //     firstName: e.target.elements.firstName.value,
    //     lastName: e.target.elements.lastName.value,
    //   };
    console.log(data);
  };

  return (
    <div className="App">
      <div>
        <form className="wrapper" onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit já envia como json */}
          <div>
            <label>
              Nome: <br />
              <input type="text" {...register('firstName')} />
              {/* register ja registra o campo digitado */}
            </label>
          </div>
          <div>
            <label>
              Sobrenome:
              <br />
              <input type="text" {...register('lastName')} />
            </label>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
