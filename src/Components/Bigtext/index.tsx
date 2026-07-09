import type React from "react";
import styles from "./styles.module.css";

type bigTextChildren = {
  children: React.ReactNode;
};

export function BigText({ children }: bigTextChildren) {
  return (
    <>
      <div className={styles.bigText}>
        <h1>{children}</h1>
      </div>
    </>
  );
}
