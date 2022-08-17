import React from 'react'
import {createRoot} from "react-dom/client";
import './slot/style.css'

// import App from "./App";
// import FunApp from "./FunApp.tsx";
// import ReturnRender from "./ReturnRender";
// import AppCommunicate from "./AppCommunicate";
// import AppClassFToS from "./AppClassFToS";
// import AppFunFToS from "./APPFunFToS";
// import AppClassSToF from "./AppClassSToF";
// import App from './test-demo/Case'
// import App from './slot/App'
// import AppProps from './communicate_across_components/AppProps'
// import App from './communicate_across_components/AppFunMoreContext'
// import App from './useSetState/setState本身的合并'
// import {MemoHeader} from './useMemo'
// import App from './setStaet不可变/App'
// import App from './全局事件传递/App'
// import App from './高阶组件/高阶组件的定义方式'
import App from './高阶组件/高阶组件_生命周期劫持'

const root = createRoot(document.getElementById("root"))
root.render(<App name="rhy"/>)
