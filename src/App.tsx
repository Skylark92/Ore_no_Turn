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
      newDeck.push(new 카드(`$${i}번 카드`, `${i}번 째`));
    }
    setDeck([...newDeck]);
  }, []);

  return (
    <>
      <Header setDeck={setDeck} />
      <main>
        <Deck>
          {deck.map((card, i) => (
            <Card index={i} />
          ))}
        </Deck>
      </main>
    </>
  );
}

export default App;
