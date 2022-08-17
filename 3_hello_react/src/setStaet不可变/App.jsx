import React, {PureComponent} from 'react';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      friends: [
        {name: 'lili1',age: 10},
        {name: 'lili2',age: 11},
        {name: 'lili3',age: 12},
      ]
    }
  }

  render() {
    const {friends} = this.state
    return (
      <div>
        <h2>好友</h2>
        <ul>
          {
            friends.map((item, index) => {
              return (
                <li key={item.name}> {item.name} 年龄: {item.age}
                  <button onClick={event => this.incrAge(index)}> age + 1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={() => this.insertData()}>添加数据</button>
      </div>
    );
  }
  insertData() {
    const newData = {name:'tom',age:99}
    const newFriend = [...this.state.friends]
    newFriend.push(newData)
    this.setState({
      friends: newFriend
    })
  }
  incrAge(index) {
    const newFriends = [...this.state.friends]
    newFriends[index].age += 1
    this.setState({
      friends: newFriends
    })
  }
}

export default App;
