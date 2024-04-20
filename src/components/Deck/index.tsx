import React from "react";
import style from "./style.module.scss";

export default function Deck({ children }: { children?: React.ReactNode }) {
  console.log(React.Children.count(children));
  return <div className={style.main}>{children}</div>;
}
