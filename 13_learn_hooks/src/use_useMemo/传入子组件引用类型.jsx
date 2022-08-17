import React, {memo, useMemo, useState} from 'react';

const RHYInfo = memo((props) => {
  console.log('RHYInfo')
  return <h2>{props.info.name}===={props.info.age}</h2>
})


function MemoHookDemo2(props) {
  const [show, setShow] = useState(true);
  console.log('MemoHookDemo2')
  //局部变量，每次都是一个新的info 可以用setState包裹
  const info = {name: 'why',age: 18}
  //配合memo一起使用
  const info2 = useMemo(() => ({name: 'why', age: 18}), []);

  return (
    <div>
      <RHYInfo info={info2}/>
      <button onClick={event => setShow(!show)}>切换</button>
    </div>
  );
}

export default MemoHookDemo2;
