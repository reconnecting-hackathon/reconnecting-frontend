import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import SingleSelect from './SingleSelect';
import StyledButton from './StyledButton';

const StyledElement = styled(Element)`
  width: 75%;
  font-size: 26px;
  padding-bottom: 5vh;

  &:hover {
    opacity: 1 !important;
  }

  &:active {
    opacity: 1 !important;
  }

  &:focus {
    opacity: 1 !important;
  }

  &.hidden {
    visibility: hidden;
    // display: none;
  }

  &.visible {
    visibility: visible;
    // display: contents;
  }

  &.is-focused {
    opacity: 1 !important;
  }

  &.is-open {
    opacity: 1 !important;
  }

  &.notCurrent {
    opacity: 0.3;
    // transform: scale(0.8);
    transition: 0.5s;
  }

  @media (max-width: 480px) {
    width: 80%;
    font-size: 16px;
  }
`;

const ScrollElement = props => {

  const {
    id, optionsList, label, nextElem, name, onChange, scrollTo, placeholder,
  } = props;

  const isHidden = id === 'q1' ? 'visible' : 'hidden';

  return (
    <StyledElement id={`element-${id}`} className={isHidden}>
      <SingleSelect
        label={label}
        id={id}
        name={name}
        placeholder={placeholder}
        optionsList={optionsList}
        nextElem={nextElem}
        onChange={onChange}
        scrollTo={scrollTo}
      />
    </StyledElement>
  );
};

export default ScrollElement;
