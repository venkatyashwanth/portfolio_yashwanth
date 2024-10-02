import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, router } from './Routes';
import { ThemeProvider } from './Theme';
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

