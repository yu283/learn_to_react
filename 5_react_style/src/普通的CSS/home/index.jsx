import React, {PureComponent} from 'react';
import './style.css'

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2 className="title">我是Home的标题</h2>
        <div className="banner">
          <span>轮播图</span>
        </div>
      </div>
    );
  }
}


export default Home;
