import React, { useLayoutEffect, useState} from 'react';

function UseLayoutEffectCounterDemo(props) {
  const [count, setCount] = useState(10);

  //这样会导致渲染两次
  useLayoutEffect(() => {
    if (count===0) {
      setCount(Math.random)
    }
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={event => setCount(0)}>修改</button>
    </div>
  );
}

export default UseLayoutEffectCounterDemo;
