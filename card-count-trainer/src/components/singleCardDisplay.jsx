import React from 'react';
import styled from 'styled-components';
//

//styles
const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const CardWrapper = styled.div`
  margin: 40vh;
`;

const SingleCardDisplay = ({ cardId }) => {
  return (
    <MainContainer>
      <CardWrapper>{cardId}</CardWrapper>
    </MainContainer>
  );
};

export default SingleCardDisplay;
