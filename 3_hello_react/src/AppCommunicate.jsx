import React, {Component} from 'react';




class Header extends Component{
  render() {
    return (
      <div>
        <h2>Header</h2>
      </div>
    );
  }
}

function ProductList() {
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
    </ul>
  )
}

function Banner() {
  return (
    <div>
      <h4>轮播图</h4>
    </div>
  )
}
class Main extends Component{

  render() {
    return (
      <div>
        <h2>Main</h2>
        <Banner/>
        <br/>
        <ProductList/>
      </div>
    );
  }

}
class Footer extends Component{

  render() {
    return (
      <div>
        <h2>Footer</h2>
      </div>
    );
  }

}


class AppCommunicate extends Component {
  render() {
    return (
      <div>
        <Header/>
        <br/>
        <Main/>
        <br/>
        <Footer/>
      </div>
    );
  }
}

export default AppCommunicate;
