import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Disable CRA mounting when a mirrored static app is present.
const rootEl = document.getElementById('root');
const shouldMountReactApp = !document.querySelector('script[src*="static/js/main."]');

if (shouldMountReactApp && rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

reportWebVitals();
