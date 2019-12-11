import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const test = () => {
  	return (<BrowserRouter>
  		<App />
  	</BrowserRouter>);
  };
  ReactDOM.render(test(), div);
  ReactDOM.unmountComponentAtNode(div);
});
