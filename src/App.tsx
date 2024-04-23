import "./App.css";
import { useState } from "react";
import 카드 from "./utils/Card";
import Deck from "./components/Deck";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [deck, setDeck] = useState<카드[]>([]);

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
