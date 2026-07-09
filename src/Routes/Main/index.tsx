import { BigText } from "../../Components/Bigtext";
import { Card } from "../../Components/Card";
import { Container } from "../../Components/Container";
import { Logo } from "../../Components/Logo";
import "./main.css";
import { gamesInfos } from "../../utils/gamesInfos";
export function Main() {
  console.log(gamesInfos);
  return (
    <>
      <Container>
        <div className="content">
          <BigText>
            Bem vindo a <Logo></Logo>
          </BigText>
          <div className="card-area">
            {gamesInfos.map((game) => (
              <Card
                key={game.gameName}
                cardImg={game.gameImg}
                cardCategory={game.gameCategory}
                cardName={game.gameName}
                cardLinkTo={game.gameLinkTo}
              ></Card>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
