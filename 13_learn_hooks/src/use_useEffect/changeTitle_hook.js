import React, {useEffect, useState} from 'react';

function ChangeTitleHook(props) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    document.title = counter + ''
  });

  return (
    <div>
      <h2>计数：{counter}</h2>
      <button onClick={event => setCounter(preCounter => preCounter+1)}>+1</button>
    </div>
  );
}

export default ChangeTitleHook;
