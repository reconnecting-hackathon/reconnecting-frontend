import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LandingPageContainer = styled.div`
  // width: 100vw;
  // height: 100vh;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-around;
  // align-content: center;
`;

const IntroSection = styled.div`

`;

const SignUpButton = styled.button`
  // width: 100px;
  // height: 25px;
  // background-color: blue;
  // color: white;
`;

const LoginButton = styled.button `
  // width: 100px;
  // height: 25px;
  // background-color: white;
  // color: blue;
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>

      <IntroSection>
        Reconnect with old friends and strengthen exisiting relationships with Reconnecting App!
      </IntroSection>

    <Link to="/add-new">
      <SignUpButton>
        Sign Up
      </SignUpButton>
    </Link>

    <Link to="/add-new">
      <LoginButton>
        Login
      </LoginButton>
    </Link>

    </LandingPageContainer>
  );
}

export default LandingPage;
