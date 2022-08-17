import React, {PureComponent} from 'react';
import Home from '../home'
import Profile from "../profile";
import styled,{ThemeProvider} from "styled-components";
import classNames from 'classnames'


const HYButton = styled.button`
  padding: 10px 20px;
  color: red;
`

const PriButton = styled(HYButton)`
  background-color: green;
  font-size: ${props => props.theme.fontSize};
`


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isActive:true
    }
  }

  render() {
    const {isActive} = this.state
    const isBar = false
    const errorClass = 'error'
    return (
      <ThemeProvider theme={{themeColor:'yellow',fontSize:'30px'}}>
        <h2 >App</h2>
        <hr/>
        <Home/>
        <hr/>
        <Profile/>
        <HYButton>我是普通的按钮</HYButton>
        <PriButton>我是主要的按钮</PriButton>
        <h2 className={classNames("foo",'bird')}>我是标题4</h2>
        <h2 className={classNames({"active":isActive,"bar":isBar},"title")}>我是标题4</h2>
        <h2 className={classNames("foo",errorClass,null,10,true)}>我是标题4</h2>
        <h2 className={classNames([errorClass,"active"])}>我是标题4</h2>
        <h2 className={classNames([{"active":isActive}])}>我是标题4</h2>
      </ThemeProvider>
    );
  }
}


export default App;
