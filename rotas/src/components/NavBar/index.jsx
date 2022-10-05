import { Link } from "react-router-dom";
import { ContainerHeader, ContainerLinks } from "./style";

export function Header() {
  return (
    <ContainerHeader>
      <h1>Routes</h1>
      <ContainerLinks>
        <Link to="/">
          <li href="#">Home</li>
        </Link>
        <Link to="/vasco">
          <li href="#">Vasco</li>
        </Link>
        <Link to="/botafogo">
          <li href="#">Botafogo</li>
        </Link>
      </ContainerLinks>
    </ContainerHeader>
  );
}
