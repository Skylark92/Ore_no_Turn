import css from "./style.module.scss";
import Back from "./Back";
import Front from "./Front";
import 카드 from "../../utils/Card";

export default function Card({ card, index }: { card: 카드; index: number }) {
  return (
    <div className={css.main} style={{ bottom: index * 5 + 15 + "px" }}>
      <Front card={card} />
      <Back />
    </div>
  );
}
