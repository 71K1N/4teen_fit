import React, { useState } from "react";
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

export default function Grupo() {
  const [teste, setTeste] = useState("");

  function mensagem() {
    alert(teste);
  }

  return (
    <div>
      <MenuSuperior />
      <Container>
        <Title>Cadastro de grupo muscular</Title>
        <Column.Group>
          <Column>
            {" "}
            <Field>
              <Label>Nome</Label>
              <Control>
                <Input
                  type="text"
                  value={teste}
                  onChange={e => setTeste(e.target.value)}
                ></Input>
              </Control>
              <Help>Nome do grupo muscular</Help>
            </Field>
          </Column>
          <Column>
            <Field>
              <Label>Descricao</Label>
              <Control>
                <Input type="text"></Input>
              </Control>
              <Help>Descricao do grupo muscular</Help>
            </Field>
          </Column>
        </Column.Group>
        <Column.Group>
          <Column></Column>
        </Column.Group>
        <Button.Group align="right">
          <Button color="primary" onClick={mensagem}>
            Gravar
          </Button>
          <Button color="danger">Limpar</Button>
        </Button.Group>
      </Container>
    </div>
  );
}
