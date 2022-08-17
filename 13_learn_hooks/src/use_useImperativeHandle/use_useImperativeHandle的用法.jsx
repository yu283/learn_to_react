import React, {useImperativeHandle} from 'react';
import {forwardRef} from "react";
import {useRef} from "react";

const RHYInput = forwardRef((props,ref)=>{

  const inputRef = useRef()

  useImperativeHandle(ref,() =>({
    focus: () => {
      console.log('已经控制')
      inputRef.current.focus()
    }
  }),[inputRef.current])

  return <input ref={inputRef} type="text"/>
})

function UseImperativeHandleDemo1(props) {
  const inputRef = useRef();
  return (
    <div>
      <RHYInput ref={inputRef}/>
      <button onClick={event => inputRef.current.focus()}>聚焦</button>
    </div>
  );
}

export default UseImperativeHandleDemo1;
