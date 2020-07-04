import React, { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + state.step,
        histories: [...state.histories, state.count + state.step],
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - state.step,
        histories: [...state.histories, state.count - state.step],
      };
    case 'SET_STEP':
      return { ...state, step: action.payload };
    default:
      return state;
  }
};

const Counter4 = () => {
  const [{ count, step, histories }, dispatch] = useReducer(reducer, {
    count: 0,
    histories: [],
    step: 1,
  });
  const [kizami, setKizami] = useState(1); // このkizamiはEnterキーでstepに代入

  return (
    <div>
      <h1>Counter4</h1>
      <div>
        count: {count} step: {step}
      </div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>増やす</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>減らす</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'SET_STEP', payload: parseInt(kizami) });
        }}
      >
        <label>刻み:</label>
        <input
          name='kizami'
          type='number'
          style={{ width: '50px' }}
          value={kizami}
          onChange={(e) => setKizami(e.target.value)}
        />
        <input type='submit' value='Stepを設定' />
      </form>
      <h2>履歴</h2>
      {histories.map(history => <div key={uuidv4()}>{history}</div>)}
    </div>
  );
};

export default Counter4;
