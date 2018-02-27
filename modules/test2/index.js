import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 6px 8px;
  border: 1px solid red;
  background: red;
  color: white;
  border-radius: 3px;
`;

function Test2({ onClick, children }) {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
};

export default Test2;