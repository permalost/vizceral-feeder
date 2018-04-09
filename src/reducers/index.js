import { combineReducers } from 'redux';

import ConnectionsReducer from './reducer_connections';
import NodesReducer from './reducer_nodes';
import TrafficReducer from './reducer_graph_data';

const rootReducer = combineReducers({
  connections: ConnectionsReducer,
  nodes: NodesReducer,
  traffic: TrafficReducer,
});

export default rootReducer;
