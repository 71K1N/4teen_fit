import React, { Component } from "react";
import {
  Button,
  Container,
  Column,
  Title,
  Label,
  Control,
  Help,
  Field,
  Input
} from "rbx";
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
          <Column.Group>
            <Column>
              <Field>
                <Label>Nome</Label>
                <Control>
                  <Input type="text" placeholder="Text input" />
                </Control>
                <Help>
                  Nome do grupo muscular ex. peito, costas, perna ...{" "}
                </Help>
              </Field>
            </Column>
            <Column>
              <Field>
                <Label>Descricao</Label>
                <Control>
                  <Input type="text" placeholder="Text input" />
                </Control>
                <Help>Descricao para o grupo muscular</Help>
              </Field>
            </Column>
          </Column.Group>
          <Column.Group>
            <Column>
              <Button outlined color="primary">
                Gravar
              </Button>
            </Column>
          </Column.Group>
        </Container>
      </div>
    );
  }
}
