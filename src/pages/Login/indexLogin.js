import React from 'react';
// import { Link } from 'react-router-dom';
import { Form, User, Pass, BtnContainer } from './styleLogin';

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
        <button type="button">Login</button>
      </BtnContainer>
    </Form>
  );
}
