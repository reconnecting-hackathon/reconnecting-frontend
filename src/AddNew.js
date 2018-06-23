import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';
//import Cookies from 'universal-cookie';

//const cookies = new Cookies();

const AddNewContainer = styled.div`
// width: 100vw;
// height: 100vh;
// display: flex;
// flex-direction: column;
// justify-content: space-around;
// align-content: center;
`;

const ListFriends = styled.div`


`;


const AddButton = styled.button`
  // width: 100px;
  // height: 25px;
  // background-color: blue;
  // color: white;
`;

const SaveButton = styled.button`
  // width: 100px;
  // height: 25px;
  // background-color: blue;
  // color: white;
`;
 

const AddNew = () => {
  return (
<AddNewContainer>


<ListFriends>

</ListFriends>

<Link to="/add-new">
<SaveButton>
  Save Button goes here
</SaveButton>
</Link>

<Link to="/add-new">
<AddButton>
  Add Another Friend
</AddButton>
</Link>


</AddNewContainer>
);
}

export default AddNew;
