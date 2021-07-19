import React from 'react';
import BaseText from './Base';

// eslint-disable-next-line react/prop-types
const Text = ({ children, size, textStyle, ...others }) => (
  <BaseText size={size} textStyle={textStyle} {...others}>
    {children}
  </BaseText>
);

export default Text;
