import React from 'react';
import ReactDOM from 'react-dom';
import PlayScreen from './index';
import { BrowserRouter } from 'react-router-dom';
import Service from '../../services';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const state = {
    started: false,
    health: 15,
    happiness: {
      total: 100,
      hunger: 100,
      boredom: 100,
      dirtness: 100,
      sleepness: 100,
    }
  };
  const handleUpdate = () => {};
  const service = new Service({ state, handleUpdate });
  const test = () => {
  	return (<BrowserRouter>
  		<PlayScreen health="" service={service} />
  	</BrowserRouter>);
  };
  ReactDOM.render(test(), div);
  ReactDOM.unmountComponentAtNode(div);
});
