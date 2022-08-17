import React, {PureComponent} from 'react';
import './style.css'

class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h2 className="title">我是Home的标题</h2>
        <ul className="settings">
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    );
  }
}


export default Profile;
