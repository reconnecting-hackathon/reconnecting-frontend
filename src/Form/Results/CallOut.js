import React from 'react';
import styled from 'styled-components';

const StyledCallOut = styled.div`

`;

const CallOut = props => (
  <StyledCallOut {...props}>
    <p>{props.id}</p>
  </StyledCallOut>
);

export default CallOut;
