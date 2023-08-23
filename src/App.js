import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [baseCounter, setBaseCounter] = useState(5);

  const Cards = () => {
    return (
      <div>
        <Card counter={baseCounter} />
        <Card counter={baseCounter} />
      </div>
    );
  };

  useEffect(() => {});

  return (
    <div className="main">
      <Navbar />
      <Header />
      {baseCounter}
      <Card counter={baseCounter} />

      <button
        onClick={() => {
          setBaseCounter(baseCounter + 1);
        }}
      >
        {" "}
        Set BaseCounter{" "}
      </button>
    </div>
  );
}

export default App;
