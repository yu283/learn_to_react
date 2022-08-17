import React, {createContext, useState} from 'react';
// import CounterHooks from "./useHooks/counter-hooks";
// import MoreState from "./use_useState/more_state";
// import ChangeTitleClass from "./use_useEffect/changeTitle_class";
// import ChangeTitleHook from "./use_useEffect/changeTitle_hook";
// import UseEffectHookCancelDemo from './use_useEffect/useEffect模拟订阅'
// import MultiUseEffectHookDemo from './use_useEffect/多个useEffect一起使用'
// import UseUseContext from "./use_useContext/use_useContext";
// import CallbackHookDemo2 from './use_useCallback/可以进行的性能优化'
// import MemoHookDemo1 from './use_useMemo/复杂计算的应用'
// import MemoHookDemo2 from "./use_useMemo/传入子组件引用类型";
// import RefHookDemo1 from "./use_useRef/引用DOM";
// import RefHookDemo2 from "./use_useRef/引用其他数据";
// import ForwardRefDemo from "./use_useImperativeHandle/回顾forwardRef";
// import UseImperativeHandleDemo1 from "./use_useImperativeHandle/use_useImperativeHandle的用法";
// import UseEffectCounterDemo from "./use_useLayoutEffect/useEffect的count修改";
// import UseLayoutEffectCounterDemo from "./use_useLayoutEffect/useLayoutEffect的count修改";
import CustomLifeHookDemo from "./自定义hook/1_认识自定义hook";

export const UserContext = createContext();
export const ThemeContext = createContext();

function App(props) {
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      App
      {/*<ChangeTitleClass/>*/}
      <button onClick={event => setIsShow((preIsShow) => !preIsShow)}>切换</button>
      {isShow &&
        <UserContext.Provider value={{name: 'rhy',age: 19}}>
          <ThemeContext.Provider value={{backGroundColor:'red'}}>
            <CustomLifeHookDemo />
          </ThemeContext.Provider>
        </UserContext.Provider>
      }
    </div>
  );
}

export default App;
