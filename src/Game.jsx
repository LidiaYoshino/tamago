import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PlayScreen from './containers/PlayScreen';
import TitleScreen from './containers/TitleScreen';
import Service from './services';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.service = new Service({ state: this.state, handleUpdate: this.setState.bind(this) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.started === false && this.state.started === true) {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
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
