import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from 'material-ui/CssBaseline';
import promise from 'redux-promise';

import reducers from './reducers';

import ConnectionList from './containers/connection_list_display';
import NodeList from './containers/node_list_display';
import VizceralGraphData from './containers/vizceral_json_display';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <div>
    <CssBaseline />
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route path="/connections" component={ConnectionList} />
          <Route path="/nodes" component={NodeList} />
          <Route path="/graph-data" component={VizceralGraphData} />
          <Route path="/" component={VizceralGraphData} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </div>,
  document.querySelector('.container')
);
