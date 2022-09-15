import CardContainer from "../Components/Card";
import { Header, Input, Button, Container } from "../styles/appStyles";

function Home() {
  return (
    <>
      <Header>Novos Devs</Header>
      <Container>
        <Input placeholder="Digite o nome do Dev aqui..." />
        <Button>Adicionar</Button>
      </Container>
    </>
  );
}

export default Home;
