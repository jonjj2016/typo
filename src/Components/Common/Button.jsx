import React from 'react';
import styled from 'styled-components';
const Button = ({ children, ...rest }) => {
  return <Btn {...rest}>{children}</Btn>;
};
const Btn = styled.button`
  outline: none;
  width: 100%;
  height: 3rem;
  font-size: 2rem;
  cursor: pointer;
  border: none;
  background-color: #777;
`;
export default Button;
