import React, {useEffect, useState} from 'react';

function MultiUseEffectHookDemo(props) {
  const [counter, setCounter] = useState(0);
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    console.log('修改DOM',counter)
    return () => {
      console.log()
    };
  }, [counter]);

  useEffect(() => {
    console.log('订阅事件')
    return () => {
      console.log()
    };
  }, []);

  useEffect(() => {
    console.log('网络请求')
    return () => {
      console.log()
    };
  }, []);


  return (
    <div>
      <h2>MultiUseEffectHookDemo</h2>
      <h2>counter:{counter}</h2>
      <button onClick={event => setCounter(counter+1)}>+1</button>
      <h2>{isLogin ? 'RENHY': '未登录'}</h2>
      <button onClick={event => setIsLogin(!isLogin)}>登录/登出</button>
    </div>
  );
}

export default MultiUseEffectHookDemo;
