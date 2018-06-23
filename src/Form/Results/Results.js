import React from 'react';
import styled from 'styled-components';

import CallOut from './CallOut';

const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color:
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResultsContainer = styled.div`
  // width: 80vw;
  // height: 80vh;
  // background-color: #FDFDFD;
  // overflow: auto;
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  // border-radius: 15px;
  // color: black;

  // @media screen and (max-width: 480px) {
  //   width: 100vw;
  //   height: 100vh;
  //   border-radius: 0;
  //   grid-template-columns: auto;
  //   grid-template-rows: minmax(90px, 1fr) auto 6fr;
  //   grid-template-areas:
  //     "search"
  //     "facets"
  //     "hits"
  // }
`;

const Results = () => (
  <PageWrapper>
    <ResultsContainer>
      <CallOut
        id="co-1"
        image="put-an-image-here"
        text="put some text here"
      />

      <CallOut
        id="co-2"
        image="put-an-image-here"
        text="put some text here"
      />

      <CallOut
        id="co-3"
        image="put-an-image-here"
        text="put some text here"
      />
    </ResultsContainer>
  </PageWrapper>
);

export default Results;
