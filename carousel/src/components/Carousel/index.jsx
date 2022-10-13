import Carousel from "react-material-ui-carousel";
import Itens from "../Itens";
import data from "../../helpers/data.json";

function Carrosel() {
  return (
    <Carousel>
      {data.map((item, i) => (
        <Itens key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default Carrosel;
