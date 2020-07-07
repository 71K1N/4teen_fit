import React, { Component } from "react";
import { Navbar, Button } from "rbx";
import { Link } from "react-router-dom";

export default class MenuSuperior extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item href="#">
            <h2>4TEEN FIT</h2>
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="start">
            <Navbar.Item> Home </Navbar.Item>
            <Navbar.Item> Treino </Navbar.Item>
            <Navbar.Item dropdown>
              <Navbar.Link> Cadastro </Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item as={Link} to="/grupo">
                  Grupo muscular
                </Navbar.Item>
                <Navbar.Item as={Link} to="/exercicio">
                  Exercicio
                </Navbar.Item>
                <Navbar.Item as={Link} to="/treino">
                  Treino
                </Navbar.Item>
                <Navbar.Item> Contact </Navbar.Item> <Navbar.Divider />
                <Navbar.Item> Report an issue </Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Segment>
          <Navbar.Segment align="end">
            <Navbar.Item>
              <Button.Group>
                <Button color="primary">
                  <strong> Sign up </strong>
                </Button>
                <Button color="light"> Log in </Button>
              </Button.Group>
            </Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
    );
  }
}
