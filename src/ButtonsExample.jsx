import { useState } from "react";
import ButtonElement from "./ButtonElement";

function ButtonsExample() {
  const [count, setCount] = useState(0);
  const [countDown, setCountDown] = useState(10);
  const [countRandom, setCountRandom] = useState(500);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCountDown(countDown - 1);
  }

  function randomCount() {
    setCountRandom(Math.random() * 10);
  }

  function resetValues() {
    setCount(0);
    setCountDown(0);
    setCountRandom(0);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <ButtonElement
        title="Increase Count"
        onClick={increaseCount}
        value={count}
      />
      <ButtonElement
        title="Decrease Count"
        onClick={decreaseCount}
        value={countDown}
      />
      <ButtonElement
        title="Random Count"
        onClick={randomCount}
        value={countRandom}
      />
      <ButtonElement
        title="Sum and Reset"
        onClick={resetValues}
        value={count + countDown + countRandom}
      />
    </div>
  );
}

export default ButtonsExample;
