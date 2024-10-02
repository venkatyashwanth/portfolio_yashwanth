import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';

import App from './App';
import Home from './components/Home';
import Projects from './components/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
    ],
  },
  
]);

export { RouterProvider, router };
