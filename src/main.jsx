import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom/client";
import {App} from './App.jsx';
// import { Practies } from './Practies.jsx'
// import Profile from './components/profile'
//import './index.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <Profile /> */}
    <App />
    {/* <Practies /> */}
  </StrictMode>,
)
