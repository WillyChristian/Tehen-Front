/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Container } from './styleHome';

export default class indexHome extends React.Component {
  render() {
    return (
      <Container>
        <h1>HOME</h1>
        <h3>APENAS PARA QUEM ESTA CADASTRADO</h3>
      </Container>
    );
  }
}
