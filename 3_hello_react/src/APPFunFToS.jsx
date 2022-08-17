import React, {Component} from 'react';
import PropTypes from 'prop-types'

class ChildCpn2 extends Component{
  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>

      </div>
    );
  }


}


function ChildCpn(props) {
  const {name,age,height} = props
  const {names} = props
  return (
    <div>
      <h2>{`${name}  ${age}  ${height}`}</h2>
      <ul>{
        names.map((item,index) => {
          return <li key={index}>{item}</li>
        })
      }</ul>
    </div>
  )
}
//类型验证
ChildCpn.propTypes = {
  //isRequired表示必须传递
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  height: PropTypes.number,
  names: PropTypes.array
}

//默认值
ChildCpn.defaultProps = {
  names: ['aaaa','bbbbb','ccccc']
}


function AppFunFToS(props) {
  return (
    <div>
      <ChildCpn name="kobe" age={18} height={190} names={['a','b','c']}/>
      <ChildCpn name="rhy" age={18} height={122} names={['d','e','f']}/>
      <ChildCpn name="rhy" age={18} height={122}/>
    </div>
  );
}

export default AppFunFToS;
