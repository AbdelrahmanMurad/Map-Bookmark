import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./resources/css/custom.css";
import { AppRoutes } from './routes/app-routes';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './context/app-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AppContextProvider>

);
