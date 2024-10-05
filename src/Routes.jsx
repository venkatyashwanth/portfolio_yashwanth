import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import App from './App';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectDesc from './components/ProjectDesc';
import ProjectList from './components/ProjectList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/projects',
        element: <Projects />,
        children: [
          {
            path: '/projects',
            element: <ProjectList />
          },
          {
            path: '/projects/:projId',
            element: <ProjectDesc />
          }
        ]
      },

    ]
  },
]);

export { RouterProvider, router };
