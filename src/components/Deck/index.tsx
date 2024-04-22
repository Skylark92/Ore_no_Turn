import React from "react";
import style from "./style.module.scss";

export default function Deck({ children }: { children?: React.ReactNode }) {
  return <main className={style.main}>{children}</main>;
}
