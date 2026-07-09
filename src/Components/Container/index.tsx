import type React from "react";
import styles from "./styles.module.css";

type containerChildren = {
  children: React.ReactNode;
};

export function Container({ children }: containerChildren) {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
}
