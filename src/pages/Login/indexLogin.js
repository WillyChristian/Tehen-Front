import React from 'react';
// import { Link } from 'react-router-dom';
import { Form } from './styleLogin';

export default function indexLogin() {
  return (
    <Form action="#">
      <h1>BEM VINDO!</h1>
      <div className="text-user">
        <input className="user" type="text" placeholder="Usuário" />
      </div>
      <div className="text-pass">
        <input className="pass" type="password" placeholder="Senha" />
      </div>
      <div className="container-fluid button-container">
        <button
          type="button"
          // onClick={() => user.caduser()}
          className="m-1 btn btn-primary"
        >
          Login
        </button>
      </div>
    </Form>
  );
}
