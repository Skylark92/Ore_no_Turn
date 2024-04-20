import css from "./style.module.scss";
import Back from "./Back";
import Front from "./Front";
import clsx from "clsx";

export default function Card({ num }: { num: number }) {
  return (
    <div className={clsx(css.main, "card")} style={{ bottom: num + "px" }}>
      <Front />
      <Back />
    </div>
  );
}
