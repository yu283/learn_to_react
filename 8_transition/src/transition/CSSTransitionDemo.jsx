import React, {PureComponent} from 'react';
import {CSSTransition} from 'react-transition-group'

import './CSSTransition.css'

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

class CSSTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    }
  }


  render() {
    const {isShow} = this.state
    return (
      <div>
        <button onClick={event => {this.setState({
          isShow:!isShow
        })}}>显示/隐藏</button>
        <CSSTransition in={isShow}
                       classNames="card"
                       timeout={300}
                       unmountOnExit={true}
                       appear
                       onEnter={el => {
                         console.log("进入状态",el)
                       }}
                       onEntering={el => {
                         console.log("onEntering",el)
                       }}
                       onEntered={el => {
                         console.log("onEntered完成",el)
                       }}
                       onExit={el => {
                         console.log("onExit",el)
                       }}
                       onExiting={el => {
                         console.log("onExiting",el)
                       }}
                       onExited={el => {
                         /*EL就是它包含的子组件*/
                         console.log("onExited",el)
                       }}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </div>
    );
  }
}


export default CSSTransitionDemo;
