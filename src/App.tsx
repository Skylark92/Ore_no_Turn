import "./App.css";
import Card from "./components/Card";
import Deck from "./components/Deck";

function App() {
  return (
    <main>
      <Deck>
        <Card num={0} />
        <Card num={5} />
        <Card num={10} />
      </Deck>
    </main>
  );
}

export default App;
