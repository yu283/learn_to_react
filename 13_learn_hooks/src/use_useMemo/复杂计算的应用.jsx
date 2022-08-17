import React, {useMemo, useState} from 'react';

function calculateNumbers(count) {
  console.log('calculateNumbers')
  let total = 0;
  for (let i=0;i<=count;i++) {
    total += i
  }
  return total
}

function MemoHookDemo1(props) {
  const [count, setCount] = useState(10);
  const [show, setShow] = useState(true);

  const total = useMemo(() => {
    return calculateNumbers(count)
  }, [count]);

  return (
    <div>
      <h2>MemoHookDemo1</h2>
      <h2>计算数字的和{total}</h2>
      <button onClick={event => setCount(count+1)}>+1</button>
      <button onClick={event => setShow(!show)}>切换</button>
    </div>
  );
}

export default MemoHookDemo1;
