import React, {useState} from 'react';

function CounterHooks(props) {
  const [counter,setCounter] = useState(0)

  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={event => setCounter(counter - 1)}>-</button>
      <button onClick={event => setCounter(preCount => preCount+10)}>+10</button>
      <button onClick={event => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default CounterHooks;
