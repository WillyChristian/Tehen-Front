import React from 'react';
import axios from 'axios';
import { Form, User, Pass, BtnContainer } from './styleLogin';

function sayHello() {
  const user = document.querySelector('.user').value;
  /*
    'nathann.do.s.santos@gmail.com','102030'
  */
  const pass = document.querySelector('.pass').value;
  axios({
    method: 'POST',
    url: 'https://tehen-app.herokuapp.com/sessions',
    data: {
      email: user,
      password: pass,
    },
  })
    .then((resp) => {
      const userID = resp.data.user._id;
      const { token } = resp.data;

      sessionStorage.setItem('token', token);
      sessionStorage.setItem('id', userID);
    })
    .then(() => {
      const id = sessionStorage.getItem('id');
      window.open(`http://localhost:3000/${id}/home`, '_self');
    })
    .catch((err) => `Erro: ${err}`);
}

export default function indexLogin() {
  return (
    <Form action="#">
      <h1>BEM VINDO!</h1>
      <User className="text-user">
        <input className="user" type="text" placeholder="Usuário" />
      </User>
      <Pass className="text-pass">
        <input className="pass" type="password" placeholder="Senha" />
      </Pass>
      <BtnContainer>
        <button type="button" onClick={() => sayHello()}>
          Login
        </button>
      </BtnContainer>
    </Form>
  );
}
