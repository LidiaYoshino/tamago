import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PlayScreen from './containers/PlayScreen';
import TitleScreen from './containers/TitleScreen';
import Service from './services';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.service = new Service({ handleUpdate: this.setState.bind(this) });
    this.state = this.service.initState();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.started === false && this.state.started === true) {
      this.service.start();
    }
  }

  componentWillUnmount() {
    this.service.stop();
  }

  handleStart = () => this.setState({ started: true });

  render() {
      return (
      <BrowserRouter>
        <Switch>
            <Route
              path="/"
              exact={true}
              component={() => <TitleScreen start={this.handleStart} />}
            />
            <Route
              path="/play"
              exact={true}
              render={() => <PlayScreen health={this.state.health} hunger={this.state.happiness.hunger} service={this.service} />}
            />
        </Switch>
      </ BrowserRouter>
      );
  }
}

export default Game;
