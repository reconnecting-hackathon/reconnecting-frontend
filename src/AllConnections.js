import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const AllConnectionsContainer = styled.div`
// width: 100vw;
// height: 100vh;
// display: flex;
// flex-direction: column;
// justify-content: space-around;
// align-content: center;
`;

const ListFriends = styled.div`


`;

const PlusButton = styled.button`
  // width: 100px;
  // height: 25px;
  // background-color: blue;
  // color: white;
`;

const AllConnections = () => {
  return (
<AllConnectionsContainer>


<ListFriends>

</ListFriends>

<Link to="/add-new">
<PlusButton>
  Plus Button goes here
</PlusButton>
</Link>


</AllConnectionsContainer>
);
}

export default AllConnections;
