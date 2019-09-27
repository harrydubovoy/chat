import React from 'react';
import { Provider } from 'react-redux';
import { Router } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';

import storeConfig from './store';
import socketConnect  from './socket/socketConnect';

// History
const history = createBrowserHistory();

// Store
const store = storeConfig({ history });

// Socket
socketConnect(store);

// Containers
import Protected from './containers/Protected';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Main from './pages/Main';

const App = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Router history={ history }>
          <Switch>
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
            <Protected>
              <Route path="/im" component={ Main } />
              <Route path="/profile" exact component={ Profile } />
            </Protected>
          </Switch>
        </Router>
      </BrowserRouter>
    </Provider>
  );
};

export default App;