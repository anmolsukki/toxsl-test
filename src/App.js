import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import loadable from 'loadable-components';
import Loader from './Utils/Loader';

const Loading = () => (
  <div>
    <Loader />
  </div>
);

const DefaultLayout = loadable(() => import('./Containers'), {
  LoadingComponent: Loading,
});

class App extends Component {
  render() {
    return (
      <main>
        <HashRouter>
          <Switch>
            <Route path="/" component={DefaultLayout} />
          </Switch>
        </HashRouter>
      </main>
    );
  }
}

export default App;
