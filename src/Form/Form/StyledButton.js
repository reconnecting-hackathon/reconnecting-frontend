import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-top: 20px;
  border: 2px solid white;
  width: 100px;
  // margin-left: auto;
  // margin-right: auto;
  border-radius: 3px;
  background: transparent;
  padding: 10px 0 10px 0;
  font-size:

  visibility: visible;
  opacity: 1;
  transition: opacity 0.5s;

  &:disabled {
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
  }

  &:hover {
    cursor: pointer;
    background: linear-gradient( rgba(79, 163, 239, 0.5), rgba(79, 163, 239, 0.5));
  }
`;

const StyledButton = props => {
  const {
    type, name, text, onClick, disabled, id,
  } = props;

  return (
    <Button
      disabled={disabled}
      id={id}
      type={type}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default StyledButton;
