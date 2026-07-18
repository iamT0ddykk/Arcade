import type React from "react";
import { Heading } from "../Heading";


type containerChildren = {
  children: React.ReactNode;
};

export function Preset({ children }: containerChildren) {
  return (
    <>
      <Heading></Heading>
      {children}
      
    </>
  );
}
