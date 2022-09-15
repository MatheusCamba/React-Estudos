import React, { useState, useEffect } from "react";

import "./styles.js";
import {
  Container,
  Titulo,
  Input,
  Button,
  Img,
  ContainerHeader,
  Box,
} from "./styles.js";
import { Card } from "../../components/Card/index.jsx";

export function Home() {
  const [studentName, setStudentName] = useState(""); //armazena o valor do nome digitado pelo aluno
  const [student, setStudent] = useState([]);
  const [user, setUser] = useState({ name: "", avatar: "" });

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudent((prevState) => [...prevState, newStudent]); // outro modo: [...student, newStudent]
  }

  useEffect(() => {
    fetch("https://api.github.com/users/MatheusCamba")
      .then((response) => response.json())
      .then((data) =>
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        })
      );
  }, []); //o array vazio(sem dependencia nenhuma) significa que vai ser executado apenas umas vez.
  //se colocarmos um stado, toda vez que ele for atualizado, o useEffect será executado.
  return (
    <>
      <Container>
        <ContainerHeader>
          <Titulo>Lista de Presença:</Titulo>
          <Box>
            <strong>{user.name}</strong>
            <Img src={user.avatar} alt="Foto de perfil" />
          </Box>
        </ContainerHeader>
        <Input
          type="text"
          placeholder="Digite o nome do jogador..."
          onChange={(e) => setStudentName(e.target.value)}
        />
        <Button type="text" onClick={handleAddStudent}>
          Adicionar
        </Button>

        {student.map((students, index) => (
          <Card key={index} name={students.name} time={students.time} />
        ))}
      </Container>
    </>
  );
}
