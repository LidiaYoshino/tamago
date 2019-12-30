import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PlayScreen from './containers/PlayScreen';
import TitleScreen from './containers/TitleScreen';
import { theme } from './styles/Theme';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from "styled-components";

ReactDOM.render(
	<BrowserRouter>
        <ThemeProvider theme={theme}>
            <Switch>
                <Route path="/" exact={true} component={TitleScreen} />
                <Route path="/play" component={PlayScreen} />
            </Switch>
        </ThemeProvider>
	</ BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
