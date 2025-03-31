import React, { useState}  from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => { setCount(prev => prev + 1); };

  const decrement = () => { setCount(prev => prev - 1); };

  const reset = () => { setCount(0); };

  return (
    <section>
      <p style={{ fontSize: '1.5rem' }}>Counter is at {count}</p>
      <button onClick={increment} style={{ margin: '5px' }}>Increment</button>
      <button onClick={decrement} style={{ margin: '5px' }}>Decrement</button>
      <button onClick={reset} style={{ margin: '5px' }}>Reset</button>
    </section>
  )
}

export  default Counter;