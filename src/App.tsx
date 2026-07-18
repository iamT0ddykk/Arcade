import { Route, Routes } from "react-router";
import { Preset } from "./Components/Preset";
import { Main } from "./Routes/Main";
import "./styles/App.css";
import { NotFound } from "./Routes/Notfound";
import { Pacman } from "./Routes/Games/Pacman";
import { Tetris } from "./Routes/Games/Tetris";
import { Snake } from "./Routes/Games/Snake";
import { Dino } from "./Routes/Games/Dino";
import { Zombie } from "./Routes/Games/Zombie";
import { Bird } from "./Routes/Games/Bird";
import { Jogos } from "./Routes/Jogos";

function App() {
  return (
    <>
      <Preset>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/Jogos" element={<Jogos></Jogos>}></Route>

          <Route path="/Pacman" element={<Pacman></Pacman>}></Route>
          <Route path="/Tetris" element={<Tetris></Tetris>}></Route>
          <Route path="/Snake" element={<Snake></Snake>}></Route>
          <Route path="/Bird" element={<Bird></Bird>}></Route>
          <Route path="/Zombie" element={<Zombie></Zombie>}></Route>
          <Route path="/Dino" element={<Dino></Dino>}></Route>

          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Preset>
    </>
  );
}

export default App;
