import * as React from 'react';
import { environment } from '../environments/environment';

import { ReactComponent as Logo } from './logo.svg';

export default function () {
  return (
    <>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to frontend!</h1>
      </header>

      <main>
        <button
          onClick={() =>
            (window.location.href = `${environment.backendUrl}/connect/google`)
          }
        >
          Login via Google
        </button>
      </main>
    </>
  );
}
