import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Product from './product';
//import ProductCard from './productCard';
//import Card1 from './card1';
//import Card2 from './card1';
import Counter from './Counter';
import OnOff from './OnOff';
import NameChanger from './NameChanger';
import DelayedAlert from './DelayedAlert';
import EmailValidation from './EmailValidation';
import Routerex from './Routerx';
import BasicForm from './BasicForm';
import HoverMe from './hoverMe';
import Notification from './Notification';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Notification/>
    <BasicForm/>
     <EmailValidation/>
      <Routerex/>
    <Counter />
    <OnOff />
    <NameChanger/>
    <DelayedAlert/>
     <HoverMe/>
  </React.StrictMode>
);

reportWebVitals();
