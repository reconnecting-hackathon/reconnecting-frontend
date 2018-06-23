import React, { Component } from 'react';
import styled from 'styled-components';
import { scroller, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

import ScrollElement from './ScrollElement';
import StyledButton from './StyledButton';
import { degreeTypes, expectedGradYears } from '../data'; // schools
import { universities } from '../data/universities';
import { majors } from '../data/majors';
import { isMobile, NUM_OF_QUESTIONS } from '../utils';

const fromTopMobile = 0.20;
const fromTopWeb = 0.40;
const asView = (ratio, dim = 'vh') => `${ratio * 100}${dim}`;
const padTop = isMobile ? asView(fromTopMobile) : asView(fromTopWeb);
const padBottom = isMobile ? '75vh' : '45vh';

const FormContainer = styled.div`
  padding: ${padTop} 0 ${padBottom};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export default class GetQuote extends Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      responses: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate = () => {
    const { disabled } = this.state;
    const SubmitButtonIsDisabled = disabled;

    const formIsComplete = this.isFormComplete();
    if (formIsComplete && SubmitButtonIsDisabled) {
      this.setState({ disabled: false });
    } else if (!SubmitButtonIsDisabled && !formIsComplete) {
      this.setState({ disabled: true });
    }
  }

  getNextElementID = () => {
    const { responses } = this.state;
    const responseValues = Object.values(responses);
    const numOfResponses = responseValues.length;
    if (numOfResponses === NUM_OF_QUESTIONS) {
      for (let i = 0; i < responseValues.length; i++) {
        if (!responseValues[i]) return `element-q${i + 1}`;
      }
    } else {
      return `element-q${numOfResponses + 1}`;
    }
    return null;
  };

  isFormComplete = () => {
    const { responses } = this.state;
    const responseValues = Object.values(responses);
    const numOfResponses = responseValues.length;
    const allQuestionsAnswered = numOfResponses === NUM_OF_QUESTIONS;
    const nullValues = responseValues.filter(response => !response);
    const noNulls = nullValues.length === 0;
    return allQuestionsAnswered && noNulls;
  }

  scrollToTop = (duration = 1000, delay = 0, smooth = 'easeInOutQuint') => {
    scroll.scrollToTop(duration, delay, smooth);
  }

  scrollTo = (elem, duration = 500, delay = 0, smooth = 'easeInOutQuint') => {
    const positionInClient = isMobile ? fromTopMobile : fromTopWeb;
    const offset = -(positionInClient * (Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0,
    )));
    scroller.scrollTo(elem, {
      duration, delay, smooth, offset,
    });
  }

  handleChange = (id, value) => {
    const { responses } = this.state;
    const newResponse = { [id]: value };
    const newResponses = { ...responses, ...newResponse };
    this.setState({ responses: newResponses });
  }

  handleSubmit = e => {
    const { id } = e.target;
    console.log('SUBMITTED', id, this.state.responses);
  }

  render() {
    return (
      <FormContainer>

        Let's get some info about your connection!

        <ScrollElement
          id="q1"
          name="first_name"
          placeholder="Anjali"
          label="What is your connection's first name?"
          // optionsList={universities}
          onChange={this.handleChange}
          scrollTo={this.scrollTo}
          nextElem={this.getNextElementID}
        />

        <ScrollElement
          id="q2"
          name="last_name"
          placeholder="Suarez"
          label="What degree are you pursuing?"
          // optionsList={degreeTypes}
          onChange={this.handleChange}
          scrollTo={this.scrollTo}
          nextElem={this.getNextElementID}
        />

        <ScrollElement
          id="q3"
          name="email"
          placeholder="anjali.suarez@email.com"
          label="What is their email address?"
          // optionsList={majors}
          onChange={this.handleChange}
          scrollTo={this.scrollTo}
          nextElem={this.getNextElementID}
        />

        <ScrollElement
          id="q4"
          name="phone"
          placeholder="914-555-2359"
          label="What is their phone number?"
          // optionsList={expectedGradYears}
          onChange={this.handleChange}
          scrollTo={this.scrollTo}
          nextElem={this.getNextElementID}
        />

        <Link to="/all-connections">
          <StyledButton
            disabled={this.state.disabled}
            type="submit"
            id="get-quote-submit"
            text="Submit"
            onClick={this.handleSubmit}
          />
        </Link>

      </FormContainer>
    );
  }
}
