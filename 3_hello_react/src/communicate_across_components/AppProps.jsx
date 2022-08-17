import React, {Component} from 'react';

function Header(props) {
  return (
    <div>
      <h2>用户昵称:{props.nickName}</h2>
      <h2>用户等级:{props.level}</h2>
    </div>
  )
}

function Profile(props) {
  return (
    <div>
      <Header {...props}/>
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  )
}

class AppProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickName: 'renhy',
      level: 99
    }
  }

  render() {
    return (
      <div>
        <Profile {...this.state}/>
      </div>
    );
  }
}

export default AppProps;
