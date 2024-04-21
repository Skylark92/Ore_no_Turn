import css from "./style.module.scss";
import Back from "./Back";
import Front from "./Front";

export default function Card({ index }: { index: number }) {
  return (
    <div className={css.main} style={{ bottom: index * 5 + "px" }}>
      <Front />
      <Back />
    </div>
  );
}
