import { BigText } from "../../Components/Bigtext";
import { Container } from "../../Components/Container";
import "./main.css";
export function NotFound() {
  return (
    <>
      <Container>
        <div className="content">
          <BigText>Erro 404</BigText>
        </div>
      </Container>
    </>
  );
}
