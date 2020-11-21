import React from 'react';

import styled from '@emotion/styled';
import { useAuth } from '../auth-provider';

/* eslint-disable-next-line */
export interface ToolProps {}

const StyledTool = styled.div`
  color: pink;
`;

export function Tool(props: ToolProps) {
  const { user, logout } = useAuth();
  return (
    <StyledTool>
      <h1>Welcome to Tool!</h1>
      jeee
      {JSON.stringify(user)}
      <button onClick={logout}>Log out</button>
    </StyledTool>
  );
}

export default Tool;
