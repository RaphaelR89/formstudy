import React, { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

function App() {
  const [data, setData] = useState('');

  //tambem tem a errors mas n utilizei
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');

    if (cep !== '') {
      fetch(`https://viacep.com.br/ws/${cep}/json/`).then((res) =>
        res.json().then((data) => {
          console.log(data);
          setData(data);
          if (data.localidade === 'Belo Horizonte') {
            setValue('address', data.logradouro);
            setValue('neighborhood', data.bairro);
            setValue('city', data.localidade);
            setValue('uf', data.uf);
            setFocus('addressNumber');
          } else {
            alert('Não entregamos para esse CEP');
            setValue('cep');
            setValue('address');
            setValue('neighborhood');
            setValue('city');
            setValue('uf');
            setValue('addressNumber');
          }
        })
      );
    } else {
      alert('Informe um número de cep válido!');
    }
  };

  return (
    <div className="App">
      <div>
        <form className="wrapper" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>
              CEP: <br />
              <input
                type="text"
                {...register('cep')}
                onBlur={checkCEP}
                placeholder="Digite um cep..."
              />
            </label>
          </div>
          <div>
            <label>
              Rua:
              <br />
              <input type="text" {...register('address')} />
            </label>
          </div>{' '}
          <div>
            <label>
              Número: <br />
              <input type="text" {...register('addressNumber')} />
            </label>
          </div>{' '}
          <div>
            <label>
              Bairro: <br />
              <input type="text" {...register('neighborhood')} />
            </label>
          </div>{' '}
          <div>
            <label>
              Cidade: <br />
              <input type="text" {...register('city')} />
            </label>
          </div>{' '}
          <div>
            <label>
              Estado: <br />
              <input type="text" {...register('uf')} />
            </label>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
