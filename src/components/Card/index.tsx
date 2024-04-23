import css from "./style.module.scss";
import anim from "./anim.module.scss";
import Back from "./Back";
import Front from "./Front";
import 카드 from "../../utils/Card";
import { useEffect, useRef } from "react";

export default function Card({ card, index }: { card: 카드; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = ref;
    const hoverOff = () => {
      if (current) current.style.pointerEvents = "none";
    };
    const hoverOn = () => {
      if (current) current.style.pointerEvents = "auto";
    };

    if (current) {
      current.addEventListener("animationstart", hoverOff);
      current.addEventListener("animationend", hoverOn);
    }

    return () => {
      current?.removeEventListener("animationstart", hoverOff);
      current?.removeEventListener("animationstart", hoverOn);
    };
  });

  return (
    <div
      className={css.main + " " + anim.addCard}
      style={{ bottom: index * 5 + 15 + "px" }}
      ref={ref}
    >
      <Front card={card} />
      <Back />
    </div>
  );
}
