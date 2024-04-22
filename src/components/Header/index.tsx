import style from "./style.module.scss";
import 카드 from "../../utils/Card";
import ADD from "../../assets/add-card.svg";

export default function Header({
  setDeck,
}: {
  setDeck: React.Dispatch<React.SetStateAction<카드[]>>;
}) {
  const onClickHandler = () => {
    setDeck((prev) => {
      if (prev.length > 20) {
        alert("더 이상 추가할 수 없습니다.");
        return prev;
      }
      const rand = Math.round(Math.random() * 1000 + 1);
      return [
        ...prev,
        new 카드(
          "제목",
          "뭔지 모르지만 길게 적어보는 것이지요",
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rand}.png`
        ),
      ];
    });
  };

  return (
    <header className={style.header}>
      <span className={style.title}>俺のターン！ ドロー！</span>
      <button className={style.btn_add} type="button" onClick={onClickHandler}>
        <span>
          <img src={ADD} alt="추가하기" />
        </span>
      </button>
    </header>
  );
}
