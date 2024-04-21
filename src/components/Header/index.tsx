import 카드 from "../../utils/Card";
import style from "./style.module.scss";

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
      return [...prev, new 카드("hello", "world")];
    });
  };

  return (
    <header className={style.header}>
      俺のターン！ ドロー！{" "}
      <button type="button" onClick={onClickHandler}>
        Add
      </button>
    </header>
  );
}
