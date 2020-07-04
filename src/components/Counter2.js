import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

const Counter2 = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Counter2</h1>
      <div>count: {count}</div>
      <button onClick={() => dispatch('increment')}>増やす</button>
      <button onClick={() => dispatch('decrement')}>減らす</button>
    </div>
  );
};

export default Counter2;
