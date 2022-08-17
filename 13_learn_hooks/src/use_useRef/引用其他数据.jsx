import React, {useEffect, useRef, useState} from 'react';

function RefHookDemo2(props) {
  const [count, setCount] = useState(0);
  const numRef = useRef(count);
  const countRef = useRef(count);
  useEffect(() => {
    countRef.current = count
  }, [count]);


  return (
    <div>
      {/*numRef的值不变*/}
      <h2>{numRef.current}</h2>
      <h2>count上一次的值:{countRef.current}</h2>
      <h2>{count}</h2>
      <button onClick={event => setCount((pV) => {
          return pV + 10
      })}>+</button>
    </div>
  );
}

export default RefHookDemo2;
