import React, { Component, useState, useEffect } from "react";
import api from "../../services/api";
import {
  Container,
  Column,
  Title,
  Input,
  Label,
  Control,
  Help,
  Field,
  Select,
  Button
} from "rbx";
import MenuSuperior from "../../components/navbar";

function Exercicio() {
  const [grupos, setGrupos] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [nomeExercicio, setNomeExercicio] = useState("");
  const [descricaoExercicio, setDescricaoExercicio] = useState("");

  useEffect(() => {
    listarGrupos();
  }, []);

  async function listarGrupos() {
    const resp = await api.get("grupomuscular");
    console.log(resp.data);
    setGrupos(resp.data);
  }

  async function gravarExercicio() {
    console.log(nomeExercicio);
    console.log(descricaoExercicio);
    console.log(selectedGroup);
  }

  function selecionarGrupo(e) {
    setSelectedGroup(e);
  }

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
                <Input
                  type="text"
                  value={nomeExercicio}
                  onChange={e => {
                    setNomeExercicio(e.target.value);
                  }}
                />
              </Control>
              <Help>Nome do exercicio</Help>
            </Field>
          </Column>
          <Column>
            <Field>
              <Label>Descricao</Label>
              <Control>
                <Input
                  type="text"
                  value={descricaoExercicio}
                  onChange={e => {
                    setDescricaoExercicio(e.target.value);
                  }}
                ></Input>
              </Control>
              <Help>Descricao do exercicio</Help>
            </Field>
          </Column>
          <Column>
            <Field>
              <Label>Grupo</Label>
              <Control>
                <Select.Container>
                  <Select
                    value={selectedGroup}
                    onChange={e => {
                      selecionarGrupo(e.target.value);
                    }}
                  >
                    {grupos.map(grupo => (
                      <Select.Option key={grupo.id} value={grupo.id}>
                        {grupo.nome}
                      </Select.Option>
                    ))}
                    <Select.Option value="23">teste</Select.Option>
                  </Select>
                </Select.Container>
              </Control>
            </Field>
          </Column>
        </Column.Group>
        <Button.Group align="right">
          <Button
            color="primary"
            onClick={() => {
              gravarExercicio();
            }}
          >
            Gravar
          </Button>
          <Button color="danger" onClick={() => {}}>
            Limpar
          </Button>
        </Button.Group>
      </Container>
    </div>
  );
}
export default Exercicio;
