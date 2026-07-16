import { Route, Routes } from "react-router";
import { Preset } from "./Components/Preset";
import { Main } from "./Routes/Main";
import "./styles/App.css";
import { NotFound } from "./Routes/Notfound";
import { Pacman } from "./Routes/Pacman";
import { Tetris } from "./Routes/Tetris";
import { Snake } from "./Routes/Snake";

function App() {
  return (
    <>
      <Preset>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>

          <Route path="/Pacman" element={<Pacman></Pacman>}></Route>
          <Route path="/Tetris" element={<Tetris></Tetris>}></Route>
          <Route path="/Snake" element={<Snake></Snake>}></Route>
          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Preset>
    </>
  );
}

export default App;
