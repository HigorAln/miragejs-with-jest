import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { makeServer } from './miragejs/server';

if (import.meta.env.DEV) {
  makeServer();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
