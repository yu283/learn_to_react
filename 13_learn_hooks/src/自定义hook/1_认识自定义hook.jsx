import React, {useEffect} from 'react';

function CustomLifeHookDemo(props) {

  useLoggingLife('CustomLifeHookDemo')

  /*useEffect(() => {
      console.log('CustomLifeHookDemo被创建了')
    return () => {
      console.log('CustomLifeHookDemo被销毁了')
    }
  },[])*/
  return (
    <div>
      <h2>CustomLifeHookDemo</h2>
    </div>
  );
}

export default CustomLifeHookDemo;

//自定义hook需要use前缀
function useLoggingLife(name) {
  useEffect(() => {
    console.log(`${name}被创建了`)
    return () => {
      console.log(`${name}被销毁了`)
    };
  }, []);

}
