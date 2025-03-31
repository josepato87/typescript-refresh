import React, { useEffect, useState}  from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => { setCount(prev => prev + 1); };

  const decrement = () => { setCount(prev => prev - 1); };

  const reset = () => { setCount(0); };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp') {
        increment();
      } else if (event.key === 'ArrowDown') {
        decrement();
      } else if (event.key === 'r') {
        reset();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }

  }, []);

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