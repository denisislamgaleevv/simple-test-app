import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'; 
import { Provider } from 'react-redux';
const defaultState={
    cash: 0
}
//action = {type: '', payload: ''}
const reducer = (state=defaultState, action) =>{
    switch(action.type){
        case 'ADD_CASH':
            return {...state, cash: state.cash + action.payload}
        case 'GET_CASH':
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <React.StrictMode>
    <Provider store = {store}> 
    <BrowserRouter  >  
      <App />
    </BrowserRouter>
    </Provider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 