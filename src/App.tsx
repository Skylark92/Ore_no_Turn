import "./App.css";
import { useEffect, useState } from "react";
import 카드 from "./utils/Card";
import Deck from "./components/Deck";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [deck, setDeck] = useState<카드[]>([]);

  useEffect(() => {
    const newDeck = [];

    for (let i = 0; i < 3; i++) {
      newDeck.push(
        new 카드(
          `${i + 1}번 카드`,
          `${i + 1}번 째`,
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
        )
      );
    }
    setDeck([...newDeck]);
  }, []);

  return (
    <>
      <Header setDeck={setDeck} />
      <Deck>
        {deck.map((card, i) => (
          <Card card={card} key={i} index={i} />
        ))}
      </Deck>
    </>
  );
}

export default App;
