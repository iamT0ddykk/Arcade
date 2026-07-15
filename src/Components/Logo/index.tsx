import { Link } from "react-router";
import styles from "./styles.module.css";

export function Logo() {
  return (
    <>
      <div className={styles.logo}>
        <Link to={"/"}>LAN-HOUSE</Link>
      </div>
    </>
  );
}
