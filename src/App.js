import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import "./App.scss";
import { ThemeContext } from './Theme';

import SideBar from './components/SideBar';
function App() {
  const { theme} = useContext(ThemeContext);
  const classes = `mainLayout ${theme}`
  return (
    <>
      <div>
        <SideBar />
        <div className= {classes} >
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
