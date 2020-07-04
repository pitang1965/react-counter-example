import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

const Counter3 = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Counter3</h1>
      <div>count: {count}</div>
      <button onClick={() => dispatch({ type: 'increment' })}>増やす</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>減らす</button>
    </div>
  );
};

export default Counter3;
