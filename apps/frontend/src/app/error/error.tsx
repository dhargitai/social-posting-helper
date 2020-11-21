import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ErrorProps {}

const StyledError = styled.div`
  color: pink;
`;

export function Error(props: ErrorProps) {
  return (
    <StyledError>
      <h1>Some error happened, please try again.</h1>
      <button onClick={() => window.location.assign('/')}>Ok</button>
    </StyledError>
  );
}

export default Error;
