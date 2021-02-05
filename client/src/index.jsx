import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

//TODO
const someObj = {
  someKey : 'someValue'
}
ReactDOM.render(<App someName = {someObj}/>, document.getElementById('app'))