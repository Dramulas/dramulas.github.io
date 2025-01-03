import React, { Component, Suspense } from 'react';
import Lottie from 'lottie-react';
import Loading from '../../containers/loading/Loading';

export default class DisplayLottie extends Component {
  render() {
    const animationData = this.props.animationData;
    const style = this.props.style;

    return (
      <Suspense fallback={<Loading />}>
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={style}
        />
      </Suspense>
    );
  }
}
