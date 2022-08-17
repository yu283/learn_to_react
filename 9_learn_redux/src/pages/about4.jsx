import React from 'react';
// import { connect } from '../utils/connect';
import {  useSelector, shallowEqual } from 'react-redux';

function About(props) {
  const { banners, recommends, counter } = useSelector(state => ({
    banners: state.banners,
    recommends: state.recommend,
    counter: state.counter
  }), shallowEqual);

  console.log(banners,recommends);
  return (
    <div>
      <hr />
      <h1>About</h1>
      <h2>当前计数: {counter}</h2>
      <h1>Banner</h1>
      <ul>
        {
          banners.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
      <h1>Recommend</h1>
      <ul>
        {
          recommends.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
    </div>
  )
}

export default About;
