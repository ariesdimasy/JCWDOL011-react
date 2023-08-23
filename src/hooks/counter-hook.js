import { useState, useEffect } from "react";

function useCounter(val, step) {
  const [count, setCount] = useState(val);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  return [count, increment, decrement];
}

export default useCounter;
