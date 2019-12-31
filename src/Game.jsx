import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PlayScreen from './containers/PlayScreen';
import TitleScreen from './containers/TitleScreen';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      health: 15,
      hapiness: {
        total: 100,
        hunger: 100,
        fun: 100,
        hygiene: 100,
        sleep: 100,
      }
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.health > 0) {
      this.setState({
        health: this.state.health - 1,
      });
    } else {
      clearInterval(this.timerID);
    }
  }

  render() {
      return (
      <BrowserRouter>
        <Switch>
            <Route
              path="/"
              exact={true}
              component={TitleScreen}
            />
            <Route
              path="/play"
              exact={true}
              render={() => <PlayScreen health={this.state.health} />}
            />
        </Switch>
      </ BrowserRouter>
      );
  }
}

export default Game;