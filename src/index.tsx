import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AppState, Auth0Provider } from '@auth0/auth0-react';
import history from './utils/history';

const onRedirectCallback = (appState?: AppState) => {
  history.push(
    appState?.returnTo ? appState.returnTo : window.location.pathname
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN_URL || ''}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || ''}
      onRedirectCallback={onRedirectCallback}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
);

reportWebVitals();
