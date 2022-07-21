import React, { useState } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
    };
    console.log(data);
  };

  return (
    <div className="App">
      <div>
        <form className="wrapper" onSubmit={onSubmit}>
          <div>
            <label>
              Nome: <br />
              <input type="text" name="firstName" />
            </label>
          </div>
          <div>
            <label htmlFor="">
              Sobrenome:
              <br />
              <input type="text" name="lastName" />
            </label>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
