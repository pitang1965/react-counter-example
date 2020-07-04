import React, { useState } from 'react'

const Counter1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter1</h1>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>増やす</button>
      <button onClick={() => setCount(count - 1)}>減らす</button>
    </div>
  )
}

export default Counter1
