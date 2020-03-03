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
  }).then((resp) => {
    console.log(resp.data);
  });
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
