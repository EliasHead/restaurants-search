import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/restaurants-loading.json';

// eslint-disable-next-line react/display-name
export default () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAsoectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} />;
};
