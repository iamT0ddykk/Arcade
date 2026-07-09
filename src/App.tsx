import { BrowserRouter, Route, Routes } from "react-router";
import { Preset } from "./Components/Preset";
import { Main } from "./Routes/Main";
import "./styles/App.css";
import { NotFound } from "./Routes/Notfound";
import { Pacman } from "./Routes/Pacman";

function App() {
  return (
    <>
      <Preset>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main></Main>}></Route>
          </Routes>

          <Routes>
            <Route path="/Pacman" element={<Pacman></Pacman>}></Route>
          </Routes>

          <Routes>
            <Route path="/*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
      </Preset>
    </>
  );
}

export default App;
