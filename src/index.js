import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import cartReducer from './components/reducers/cartReducer';

const store = createStore(cartReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
 
);
