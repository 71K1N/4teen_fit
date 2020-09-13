import React, { useState, useEffect } from "react";
import api from "../../services/api";
import {
  Button,
  Container,
  Column,
  Title,
  Label,
  Control,
  Help,
  Field,
  Input,
  Table,
} from "rbx";
import MenuSuperior from "../../components/navbar";

export default function Grupo() {
  const [lista, setLista] = useState([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    listarGrupos();
  }, []);

  function store() {
    api.post("grupomuscular", { nome, descricao }).then((response) => {
      alert("Dado cadastrado com sucesso!!");
      listarGrupos();
      limparCampos();
    });
  }

  async function listarGrupos() {
    const resp = await api.get("grupomuscular");
    console.log(resp.data);
    setLista(resp.data);
  }

  function limparCampos() {
    setNome("");
    setDescricao("");
  }

  async function remove(id) {
    await api.delete("grupomuscular/" + id).then((response) => {
      const result = response.data.removed;
      if (result) {
        listarGrupos();
      }
      console.log(response.data.removed);
    });
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
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                ></Input>
              </Control>
              <Help>Nome do grupo muscular</Help>
            </Field>
          </Column>
          <Column>
            <Field>
              <Label>Descricao</Label>
              <Control>
                <Input
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  type="text"
                ></Input>
              </Control>
              <Help>Descricao do grupo muscular</Help>
            </Field>
          </Column>
        </Column.Group>
        <Button.Group align="right">
          <Button color="primary" onClick={store}>
            Gravar
          </Button>
          <Button color="danger" onClick={limparCampos}>
            Limpar
          </Button>
        </Button.Group>
        <Column.Group>
          <Column>
            <Table fullwidth>
              <Table.Head>
                <Table.Row>
                  <Table.Cell>Nome</Table.Cell>
                  <Table.Cell>Descricao</Table.Cell>
                  <Table.Cell>Excluir</Table.Cell>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                {lista.map((item) => (
                  <Table.Row key={item.id}>
                    <Table.Cell>{item.nome}</Table.Cell>
                    <Table.Cell>{item.descricao}</Table.Cell>
                    <Table.Cell>
                      <Button
                        color="danger"
                        onClick={() => {
                          remove(item.id);
                        }}
                      >
                        Excluir
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Column>
        </Column.Group>
      </Container>
    </div>
  );
}
