// import CardContainer from "../../Components/Card";
import { Header, Input, Button, Container } from "./styles";
import { Card } from "../../Components/Card";
import { useState } from "react";

export function Home() {
  const [dev, setDev] = useState("");
  const [estudanteDev, setEstudanteDev] = useState([]);

  function handleAddDev() {
    const newDev = {
      name: dev,
      time: new Date().toLocaleDateString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setEstudanteDev((prevState) => [...prevState, newDev]);
  }

  return (
    <>
      <Header>Novos Devs: {dev}</Header>
      <Container>
        <Input
          placeholder="Digite o nome do Dev aqui..."
          onChange={(e) => setDev(e.target.value)}
        />
        <Button type="text" onClick={handleAddDev}>
          Adicionar
        </Button>

        {estudanteDev.map((devs, index) => (
          <Card key={index} name={devs.name} time={devs.time} />
        ))}
      </Container>
    </>
  );
}
