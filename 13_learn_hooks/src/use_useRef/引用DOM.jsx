import React, {useRef} from 'react';

function RefHookDemo1(props) {

  const titleRef = useRef()
  const inputRef = useRef()

  const changeDOM = () => {
    titleRef.current.innerHTML = 'ayuuuuu'
    inputRef.current.focus()
  }

  return (
    <div>
      <h2 ref={titleRef}>RefHookDemo1</h2>
      <input type="text" ref={inputRef}/>

      <button onClick={event => changeDOM()}>修改DOM</button>
    </div>
  );
}

export default RefHookDemo1;
