import { Container } from "../../Components/Container";
import "./main.css";
import { Foot } from "../../Components/Foot";
import SearchBar from "../../Components/SearchBar";
import { gamesInfos } from "../../utils/gamesInfos";
export function Jogos() {
  const arcadeGames = gamesInfos.filter(
    (categoria) => categoria.gameCategory === "arcade",
  );
  console.log(arcadeGames);
  return (
    <>
      <Container>
        <div className="content">
          <SearchBar></SearchBar>
        </div>
      </Container>
      <Foot></Foot>
    </>
  );
}
