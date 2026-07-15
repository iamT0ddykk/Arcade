import { Link } from "react-router";
import { Logo } from "../Logo";
import styles from "./styles.module.css";
console.log(styles);
export function Heading() {
  return (
    <>
      <header>
        <Logo></Logo>
        <nav>
          <Link to={"/"}>Início</Link>
          <Link to={"/jogos"}>Jogos</Link>
          <Link to={"/categorias"}>Categorias</Link>
        </nav>
      </header>
    </>
  );
}
