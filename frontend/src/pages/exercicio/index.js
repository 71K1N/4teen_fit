import React, { useState, useEffect } from "react";
import api from "../../services/api";
import {
  Container,
  Column,
  Title,
  Table,
  Input,
  Label,
  Control,
  Help,
  Field,
  Select,
  Button,
} from "rbx";
import MenuSuperior from "../../components/navbar";

function Exercicio() {
  const [grupos, setGrupos] = useState([]);
  const [exercicios, setExercicios] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [nomeExercicio, setNomeExercicio] = useState("");
  const [id, setId] = useState("");
  const [descricaoExercicio, setDescricaoExercicio] = useState("");

  useEffect(() => {
    listarGrupos();
    listarExercicios();
  }, []);

  async function listarGrupos() {
    const resp = await api.get("grupomuscular");
    console.log(resp.data);
    setGrupos(resp.data);
  }

  function selecionarGrupo(e) {
    setSelectedGroup(e);
    console.log(selectedGroup);
  }

  //  - STORE
  async function store() {
    if (!id) {
      await api
        .post("exercicio", {
          nome: nomeExercicio,
          descricao: descricaoExercicio,
          id_grupoMuscular: selectedGroup,
        })
        .then((response) => {
          alert("Dado cadastrado com sucesso!!");
          limparCampos();
          listarExercicios();
        });
    } else {
      await api
        .put("exercicio/" + id, {
          nome: nomeExercicio,
          descricao: descricaoExercicio,
          id_grupoMuscular: selectedGroup,
        })
        .then((response) => {
          alert("Dado atualizado com sucesso!!");
          limparCampos();
          listarExercicios();
        });
    }
  }

  //  - LISTAR EXERCICIOS
  async function listarExercicios() {
    await api.get("exercicio").then((response) => {
      setExercicios(response.data);
    });
  }

  //  - REMOVER EXERCICIO
  async function remover(id) {
    await api.delete("exercicio/" + id).then((response) => {
      const { removed } = response.data;
      if (removed) {
        listarExercicios();
        alert("item removido com sucesso!!");
      } else {
        alert("O exercicio nao removido!!");
      }
    });
  }

  function limparCampos() {
    setId("");
    setNomeExercicio("");
    setDescricaoExercicio("");
    setSelectedGroup("");
  }

  //  - editar
  function editar(id, nome, descricao, grupo) {
    setId(id);
    setNomeExercicio(nome);
    setDescricaoExercicio(descricao);
    setSelectedGroup(grupo);
  }

  return (
    <div>
      <MenuSuperior />
      <Container>
        <Column.Group centered>
          <Column>
            <Title size={3}> Cadastro de Exercicio </Title>
          </Column>
        </Column.Group>
        <Column.Group>
          <Column>
            <Field>
              <Label> Grupo </Label>
              <Control>
                <Select.Container>
                  <Select
                    value={selectedGroup}
                    onChange={(e) => {
                      selecionarGrupo(e.target.value);
                    }}
                  >
                    <Select.Option value="">Selecione</Select.Option>
                    {grupos.map((grupo) => (
                      <Select.Option key={grupo.id} value={grupo.id}>
                        {grupo.nome}
                      </Select.Option>
                    ))}
                  </Select>
                </Select.Container>
              </Control>
            </Field>
          </Column>
          <Column>
            <Field>
              <Label> Nome </Label>
              <Control>
                <Input
                  type="text"
                  value={nomeExercicio}
                  onChange={(e) => {
                    setNomeExercicio(e.target.value);
                  }}
                />
              </Control>
              <Help> Nome do exercicio </Help>
            </Field>
          </Column>
          <Column>
            <Field>
              <Label> Descricao </Label>
              <Control>
                <Input
                  type="text"
                  value={descricaoExercicio}
                  onChange={(e) => {
                    setDescricaoExercicio(e.target.value);
                  }}
                ></Input>
              </Control>
              <Help> Descricao do exercicio </Help>
            </Field>
          </Column>
        </Column.Group>
        <Button.Group align="right">
          <Button color="success" onClick={store}>
            Gravar
          </Button>
          <Button color="warning" onClick={limparCampos}>
            Limpar
          </Button>
        </Button.Group>
        <Column.Group>
          <Column>
            <Table fullwidth bordered striped>
              <Table.Head>
                <Table.Row>
                  <Table.Cell> Nome </Table.Cell>
                  <Table.Cell> Descricao </Table.Cell>
                  <Table.Cell>Excluir/Editar </Table.Cell>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                {exercicios.map((item) => (
                  <Table.Row key={item.id}>
                    <Table.Cell> {item.nome} </Table.Cell>
                    <Table.Cell> {item.descricao} </Table.Cell>
                    <Table.Cell>
                      <Button.Group>
                        <Button
                          outlined
                          color="danger"
                          onClick={() => {
                            remover(item.id);
                          }}
                        >
                          Excluir
                        </Button>{" "}
                        <Button
                          outlined
                          color="primary"
                          onClick={() => {
                            editar(
                              item.id,
                              item.nome,
                              item.descricao,
                              item.id_grupoMuscular
                            );
                          }}
                        >
                          Editar
                        </Button>
                      </Button.Group>
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
export default Exercicio;
