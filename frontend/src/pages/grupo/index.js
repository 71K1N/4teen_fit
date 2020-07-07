import React, { Component } from "react";
import { Container, Column, Title } from "rbx";
import MenuSuperior from "../../components/navbar";

export default class Grupo extends Component {
  render() {
    return (
      <div>
        <MenuSuperior />
        <Container>
          <Column.Group centered>
            <Column>
              <Title size={3}>Cadastro de Grupo muscular</Title>
            </Column>
          </Column.Group>
        </Container>
      </div>
    );
  }
}
