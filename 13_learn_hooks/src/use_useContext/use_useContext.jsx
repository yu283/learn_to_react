import React, {useContext} from 'react';

import {UserContext,ThemeContext} from "../App";

function UseUseContext(props) {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  console.log(user)
  console.log(theme)
  return (
    <div>
      <h2>UseUseContext</h2>
    </div>
  );
}

export default UseUseContext;
