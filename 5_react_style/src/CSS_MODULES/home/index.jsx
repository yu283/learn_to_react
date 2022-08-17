import React, {PureComponent} from 'react';
import homeStyle from './style.module.css'

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={homeStyle.title}>我是Home的标题</h2>
        <div className={homeStyle.banner}>
          <span>轮播图</span>
        </div>
      </div>
    );
  }
}


export default Home;
