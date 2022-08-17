 import React, {memo, useCallback, useState} from 'react';

 /**
  * useCallback使用的地方：
  * 在将一个组件中的函数传递给子元素调用时，使用useCallback对函数处理
  * @type {React.NamedExoticComponent<object>}
  */

const RHYButton = memo((props) => {
  console.log(props.title)
  return <button onClick={props.increment}>RHYButton+1</button>
})

function CallbackHookDemo2(props) {
  console.log("重渲染")
  const [counter, setCounter] = useState(() => 1);
  const [show, setShow] = useState(true);
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
      <RHYButton title={'btn1'} increment={increment} />
      <RHYButton title={'btn2'} increment={increment2} />

      <button onClick={event => setShow(!show)}>切换</button>
    </div>
  );
}

export default CallbackHookDemo2;
