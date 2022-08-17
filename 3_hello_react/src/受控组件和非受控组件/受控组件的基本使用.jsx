import React, {PureComponent} from 'react';

class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label htmlFor="username">
            {/*受控组件*/}
            用户:<input value={this.state.username}
                      type="text"
                      id="username"
                      onChange={event => this.changeUN(event)}/>
          </label>
          <input type="submit" value="提交"/>
        </form>
      </div>
    );
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.username)
  }

  changeUN(e) {
    // console.log(e.target.value);
    this.setState({
      username: e.target.value
    })
  }
}


export default App;
