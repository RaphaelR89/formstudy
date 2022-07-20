import React, { useState } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
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
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              Sobrenome:
              <br />
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
