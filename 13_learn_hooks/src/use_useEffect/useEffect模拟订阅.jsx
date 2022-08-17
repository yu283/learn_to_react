import React, {useEffect, useState} from 'react';

function UseEffectHookCancelDemo(props) {
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    console.log('订阅事件')
    return () => {
      console.log('取消订阅事件')
    };
  },[] );

  return (
    <div>
      <h2>UseEffectHookCancelDemo</h2>
      <h2>counter:{counter}</h2>
      <button onClick={event => setCounter(counter+1)}>+1</button>
    </div>
  );
}

export default UseEffectHookCancelDemo;
