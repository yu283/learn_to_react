import React, {createRef, PureComponent} from 'react';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.titleRef = createRef()
    this.titleEl = null
  }

  render() {
    return (
      <div>
        <h2 ref="titleRef">Hello World</h2>
        {/*推荐的方式*/}
        <h2 ref={this.titleRef}>Hello World</h2>
        <h2 ref={(arg) => this.titleEl=arg}>Hello World</h2>
        <button onClick={event => this.changeText()}>改变文本</button>
      </div>
    );
  }

  changeText() {
    // console.log(this.refs.titleRef);
    console.log(this.titleRef.current);
    this.titleRef.current.innerHTML = 'Hello JS'

    console.log(this.titleEl)
    this.titleEl.innerHTML = 'HAAAA'
  }
}


export default App;
