import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Disable CRA mounting when the mirrored static app is present (dev or prod).
const rootEl = document.getElementById('root');
const isMirroredPresent = !!document.querySelector('script[src*="static/js/main"]')
  || !!document.querySelector('script[src*="static/js/vendors"]')
  || !!document.querySelector('html[data-theme="base44"]');
const shouldMountReactApp = !isMirroredPresent;

if (shouldMountReactApp && rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

reportWebVitals();
