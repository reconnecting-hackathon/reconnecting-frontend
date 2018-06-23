import React, { Component } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import 'react-select/dist/react-select.css';

import { NUM_OF_QUESTIONS } from '../utils';

const IDs = (function questionIDs() {
  const emptyArray = new Array(NUM_OF_QUESTIONS).fill(0);
  const idArr = emptyArray.map((id, idx) => `element-q${idx + 1}`);
  return idArr;
}());

const Label = styled.label`
  font-size: 125%;
`;

const StyledSelect = styled(Select)`
  &:focus {
    opacity: 1 !important;
  }

  &:active {
    opacity: 1 !important;
  }

  &.is-focused {
  opacity: 1 !important;
  }

  &.is-open {
  opacity: 1 !important;
  }
`;

export default class SingleSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false, // react-select
      searchable: true, // react-select
      clearable: true, // react-select
      value: null, // react-select
    };
  }

  componentDidUpdate = () => {
    this.handleScroll();
  }

  getNextQuestionIndex = currentIdx => (
    (currentIdx < NUM_OF_QUESTIONS - 1) ? currentIdx + 1 : 0
  );

  clearValue = () => this.select.setInputValue('');

  updateValue = value => {
    this.setState({ value }); // TODO: refactor to eliminate redundant local value
    this.props.onChange(this.props.name, value);
  };

  handleClick = () => {
    const currentQuestionID = `element-${this.props.id}`;
    const currentQuestionElement = document.getElementById(currentQuestionID);
    IDs.map(id => {
      const elem = document.getElementById(id);
      return elem.classList.add('notCurrent');
    });
    currentQuestionElement.classList.remove('notCurrent');
    currentQuestionElement.classList.remove('hidden');
    currentQuestionElement.classList.add('visible');
  }

  handleScroll = () => {
    const currentQuestionID = `element-${this.props.id}`;
    IDs.map(id => {
      const elem = document.getElementById(id);
      return elem.classList.add('notCurrent');
    });

    const nextQuestionID = this.props.nextElem();
    if (nextQuestionID) {
      const nextQuestionElement = document.getElementById(nextQuestionID);
      nextQuestionElement.classList.remove('notCurrent');
      nextQuestionElement.classList.remove('hidden');
      nextQuestionElement.classList.add('visible');
      this.props.scrollTo(nextQuestionID);
    } else {
      const submitButtonID = 'get-quote-submit';
      this.props.scrollTo(submitButtonID);
    }
  };

  updateRef = ref => { this.select = ref; }

  autoFocus

  render() {
    const {
      id, key, optionsList, label, placeholder,
    } = this.props;
    const {
      clearable, disabled, searchable, value,
    } = this.state;

    return (
      <div>
        <Label for={id}>{label}</Label>
        <StyledSelect
          id={id}
          name={key}
          placeholder={placeholder}
          options={optionsList}
          onClick={this.handleClick}
          onTouchStart={this.handleClick}
          onSelect={this.handleClick}
          onChange={this.updateValue}
          ref={this.updateRef}
          onBlurResetsInput={false}
          onSelectResetsInput={false}
          simpleValue
          clearable={clearable}
          disabled={disabled}
          value={value}
          searchable={searchable}
        />
      </div>
    );
  }
}
