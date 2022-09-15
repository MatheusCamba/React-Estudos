import { Card } from "../styles/cardStyles";

function CardContainer({ name, time }) {
  return (
    <>
      <Card>
        <strong>{name}</strong>
        <small>{time}</small>
      </Card>
    </>
  );
}

export default CardContainer;
