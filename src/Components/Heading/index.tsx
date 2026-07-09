import { Logo } from "../Logo";
import styles from "./styles.module.css";
console.log(styles);
export function Heading() {
  return (
    <>
      <header>
        <Logo></Logo>
        <nav>
          <a href="">Início</a>
          <a href="">Jogos</a>
          <a href="">Categorias</a>
        </nav>
      </header>
    </>
  );
}
