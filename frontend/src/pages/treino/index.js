import React, { Component } from "react";
import { Container, Column, Title } from "rbx";
import MenuSuperior from "../../components/navbar";

export default class Treino extends Component {
  render() {
    return (
      <div>
        <MenuSuperior />
        <Container>
          <Column.Group centered>
            <Column>
              <Title size={3}>Cadastro de Treino</Title>
            </Column>
          </Column.Group>
        </Container>
      </div>
    );
  }
}
