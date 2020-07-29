import React, { Component } from "react";
import {
  Container,
  Column,
  Title,
  Input,
  Label,
  Control,
  Help,
  Field,
  Select
} from "rbx";
import MenuSuperior from "../../components/navbar";

export default class Exercicio extends Component {
  render() {
    return (
      <div>
        <MenuSuperior />
        <Container>
          <Column.Group centered>
            <Column>
              <Title size={3}>Cadastro de Exercicio</Title>
            </Column>
          </Column.Group>
          <Column.Group>
            <Column>
              <Field>
                <Label>Nome</Label>
                <Control>
                  <Input type="text"></Input>
                </Control>
                <Help>Nome do exercicio</Help>
              </Field>
            </Column>
            <Column>
              <Field>
                <Label>Descricao</Label>
                <Control>
                  <Input type="text"></Input>
                </Control>
                <Help>Descricao do exercicio</Help>
              </Field>
            </Column>
            <Column>
            <Field>
              <Label>Grupo</Label>
              <Control>
                  <Select.Container rounded>
                  <Select >
                    <Select.Option>teste</Select.Option>
                  </Select>
                </Select.Container>
              </Control>
            </Field>
            </Column>
          </Column.Group>
        </Container>
      </div>
    );
  }
}
