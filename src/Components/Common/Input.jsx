import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  return <InputWrapper {...props}></InputWrapper>;
};
const InputWrapper = styled.input`
  height: 8%;
  border: none;
  padding: 2rem;
  font-size: 1.5rem;
  border-top: 2px solid green;
`;
export default Input;
