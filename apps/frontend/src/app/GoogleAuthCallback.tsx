import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import client from '../utils/client';
import { useAuth } from '../app/auth-provider';

function GoogleAuthCallback() {
  const [auth, setAuth] = useState(null);
  const { login } = useAuth();
  const location = useLocation();
  useEffect(() => {
    if (!location) {
      return;
    }
    const { search } = location;
    client(`/auth/google/callback?${search}`)
      .then((authResponse) => {
        login(authResponse);
        window.location.assign('/');
      })
      .catch((error) => {
        console.error(error);
        window.location.assign('/error');
      });
  }, [location]);

  return (
    <div>
      {auth && (
        <>
          <div>Jwt: {auth.jwt}</div>
          <div>User Id: {auth.user.id}</div>
          <div>Provider: {auth.user.provider}</div>
        </>
      )}
    </div>
  );
}

export default GoogleAuthCallback;
