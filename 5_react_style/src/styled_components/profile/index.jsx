import React, {PureComponent} from 'react';
import styled from "styled-components";

/**
 *特点：props穿透
 *
 * @type {StyledComponent<"input", AnyIfEmpty<DefaultTheme>, {}, never>}
 */

const HYInput = styled.input.attrs({
  placeholder: 'rhy',
  bColor: 'red'
})`
  background-color: lightblue;
  border-color: ${props => props.bColor};
  color: ${props => props.color};
`

class Profile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: '#bfa'
    }
  }

  render() {
    return (
      <div>
        <input type="text "/>
        <HYInput type="text" color={this.state.color}/>
        <h2 >我是Home的标题</h2>
        <ul >
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    );
  }
}


export default Profile;
