import React, {PureComponent} from 'react';


// import About from "./pages/about";
import About from "./pages/about4";
import Home from "./pages/home5saga";

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <hr/>
        <Home/>
        <hr/>
        <About/>
      </div>
    );
  }
}


export default App;
