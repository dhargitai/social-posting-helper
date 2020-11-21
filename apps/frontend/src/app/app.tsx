import React from 'react';
import { useAuth } from './auth-provider';
import { useAsync } from '../utils/hooks';
import AuthenticatedApp from './authenticated-app';
import UnauthenticatedApp from './unauthenticated-app';
import client from '../utils/client';

export function App() {
  const {
    data: user,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData,
  } = useAsync();
  const { getToken, setUser } = useAuth();

  async function getUser() {
    let user = null;

    const token = await getToken();
    if (token) {
      user = await client('/users/me', { token });
    }

    return user;
  }

  React.useEffect(() => {
    run(getUser());
  }, [run]);

  React.useEffect(() => {
    setUser(user);
  }, [user]);

  if (isLoading || isIdle) {
    return <div>Loading...</div>;
  }

  return user ? (
    <AuthenticatedApp user={user} />
  ) : (
    <UnauthenticatedApp user={user} />
  );
}

export default App;
