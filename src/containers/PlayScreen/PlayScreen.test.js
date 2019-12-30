import React from 'react';
import ReactDOM from 'react-dom';
import PlayScreen from './index';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const test = () => {
  	return (<BrowserRouter>
  		<PlayScreen />
  	</BrowserRouter>);
  };
  ReactDOM.render(test(), div);
  ReactDOM.unmountComponentAtNode(div);
});
