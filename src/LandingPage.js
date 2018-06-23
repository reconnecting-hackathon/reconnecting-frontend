import React from 'react';
import styled from 'styled-components';

const LandingPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
`;

const IntroSection = styled.div`

`;

const SignUpButton = styled.button`
  width: 100px;
  height: 25px;
  background-color: blue;
  color: white;
`;

const LoginButton = styled.button `
  width: 100px;
  height: 25px;
  background-color: white;
  color: blue;
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>

      <IntroSection>
        This will be the landing page.
      </IntroSection>

      <SignUpButton>
        Sign Up
      </SignUpButton>

      <LoginButton>
        Login
      </LoginButton>

    </LandingPageContainer>
  );
}

export default LandingPage;
