import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';
import { AuthProvider } from './app/auth-provider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
