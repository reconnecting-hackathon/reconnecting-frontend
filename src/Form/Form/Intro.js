import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Header1, Paragraph } from '../Elements';
import StyledButton from './StyledButton';

const Table = styled.div`
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

const TableCell = styled.div`
  width: 80%;
  align-self: center;
`;

const Intro = () => (
  <section className="introduction">
    <Table>
      <TableCell>
        <Header1>
          Get a Quote
        </Header1>

        <Paragraph>
          Ready to see your options? Answer four general questions to get an instant quote.
        </Paragraph>

        <Link to="/get-quote">
          <StyledButton text="Start" />
        </Link>

      </TableCell>
    </Table>
  </section>
);

export default Intro;
