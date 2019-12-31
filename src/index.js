import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { theme } from './styles/Theme';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components';
import Game from './Game';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Game />
    </ThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
