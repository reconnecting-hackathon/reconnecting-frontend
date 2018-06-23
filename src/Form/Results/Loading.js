import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';

import { Header1, Paragraph } from '../Elements';

import svg from '../images/loading.svg';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  overflow: hidden;
`;

const LoadingWrapper = styled.div`
  width: 80%;
  align-self: center;
`;

const LoadingImg = styled.img`
  margin-top: 25px;
`;

class Loading extends Component {
  state = {
    timeToTransition: false,
  }

  componentDidMount = () => {
    this.mounted = true;
    setTimeout(() => {
      if (this.mounted) {
        this.setState({ timeToTransition: true });
      }
    }, 2500);
  }

  componentWillUnmount = () => {
    this.mounted = false;
  }

  render() {
    const { timeToTransition } = this.state;

    return (
      <div>
        {
        timeToTransition
          ? <Redirect to="/results" />
          :
          <PageWrapper>
            <LoadingWrapper>
              <Header1>Thanks!</Header1>
              <Paragraph>{'We\'re putting together your personalized quote.'}</Paragraph>
              <LoadingImg src={svg} alt="loading-icon" />
            </LoadingWrapper>
          </PageWrapper>
        }
      </div>
    );
  }
}

export default Loading;
