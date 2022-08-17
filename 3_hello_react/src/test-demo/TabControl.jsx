import React, {Component} from 'react';

class TabControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }


  render() {
    const {titles} = this.props
    const {currentIndex} = this.state
    return (
      <div className='tab-control'>
        {
          titles.map((item, index) => {
            return (
              <div
                onClick={() => this.changeIndex(index)}
                className={'tab-item ' + (index === currentIndex ? 'active': '')}
                key={item}>
                <span>{item}</span>
              </div>)
          })
        }
      </div>
    );
  }
  changeIndex(index) {
    this.setState({
      currentIndex: index
    })
    const {itemClick} = this.props
    itemClick(index)
  }
}

export default TabControl;
