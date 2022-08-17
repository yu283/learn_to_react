import React, {PureComponent} from 'react';

class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      fruits: 'orange'
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <select name="fruits"
                  value={this.state.fruits}
                  onChange={event => this.changeUN(event)}>
            <option value="apple">苹果</option>
            <option value="orange">橙子</option>
            <option value="banana">香蕉</option>
          </select>
          <input type="submit" value="提交"/>
        </form>
      </div>
    );
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.fruits)
  }

  changeUN(e) {
    console.log(e.target.value);
    this.setState({
      fruits: e.target.value
    })
  }
}


export default App;
