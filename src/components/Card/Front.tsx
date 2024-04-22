import 카드 from "../../utils/Card";
import css from "./style.module.scss";

export default function Front({ card }: { card: 카드 }) {
  const { name, desc, img } = card;
  return (
    <div className={css.front}>
      <h3 className={css.title}>{name}</h3>
      <img className={css.img} src={img} />
      <p className={css.desc}>{desc}</p>
    </div>
  );
}
