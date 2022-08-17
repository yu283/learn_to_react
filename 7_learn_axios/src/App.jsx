import React, {PureComponent} from 'react';
import axios from "axios";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: {}
    }
  }

  async componentDidMount() {
    /*axios({
      url: 'https://httpbin.org/get',

    }).then(res => {
      console.log(res)
      this.setState({
        products: {...this.state.products,...res.data}
      })
    }).catch(error => {
      console.error(error)
    })

    axios({
      url: 'https://httpbin.org/post',
      data: {
        name: "rhy",
        age: 30
      },
      method: 'POST'
    }).then((res) => {
      console.log('POST',res)
    }).catch((err) => {
      console.error(err)
    })*/

    //获取错误信息
    /*try {
      const res =  await axios.get('https://httpbin.org/get', {
        params: {
          name: "rhy",
          age: 18
        }
      })
      console.log(res.data)
    } catch (e) {
      //这样可以获取请求失败的错误信息
      console.error(e)
    }*/

    const req1 = axios.get('https://httpbin.org/get')
    const req2 = axios.post('https://httpbin.org/post',{
      name:'AYU',
      age:10086
    })

    //在底层调用了Promise.all
    axios.all([req1,req2]).then(([res1,res2]) => {
      /*res.forEach(item => {
        console.log(item)
      })*/
      console.log(res1)
      console.log(res2)
    }).catch(e => {
      console.error(e)
    })
  }

  render() {
    return (
      <div>
        App
      </div>
    );
  }
}

export default App;
