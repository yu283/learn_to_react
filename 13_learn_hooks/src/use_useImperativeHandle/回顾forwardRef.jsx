import React, {forwardRef, useRef} from 'react';

const RHYInput = forwardRef((props,ref)=>{
  return <input ref={ref} type="text"/>
})

function ForwardRefDemo(props) {
  const inputRef = useRef();
  return (
    <div>
      <RHYInput ref={inputRef}/>
      <button onClick={event => inputRef.current.focus()}>聚焦</button>
    </div>
  );
}

export default ForwardRefDemo;
