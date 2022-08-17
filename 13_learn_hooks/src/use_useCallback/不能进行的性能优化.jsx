import React, {useCallback, useState} from 'react';

function CallbackHookDemo1(props) {
  const [counter, setCounter] = useState(() => 1);

  const increment = () => {
    console.log('increment1')
    setCounter((preValue) => {
      return preValue + 1
    })
  }

  const increment2 = useCallback(
    () => {
      console.log('increment2')
      setCounter(counter + 1)
    }, [counter]);

  return (
    <div>
      <h2>CallbackHookDemo1</h2>
      <h2>{counter}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={increment2}>+1</button>
    </div>
  );
}

export default CallbackHookDemo1;
