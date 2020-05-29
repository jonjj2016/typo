import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';
const Display = ({ text, info }) => {
  return (
    <StyledDisplay>
      <span>{text}</span>: <span>{info}</span>
    </StyledDisplay>
  );
};

export default Display;
