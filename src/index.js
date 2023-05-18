import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./resources/css/custom.css";
import { AppRoutes } from './routes/app-routes';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './context/app-context';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
    <BrowserRouter>
      <AuthProvider>
        <Toaster
          position="top-center"
          reverseOrder={true}
        />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  </AppContextProvider>

);
