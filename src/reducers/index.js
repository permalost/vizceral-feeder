import { combineReducers } from 'redux';

import ConnectionsReducer from './reducer_connections';
import NodesReducer from './reducer_nodes';
import ElasticSearchReducer from './reducer_elasticsearch';

const rootReducer = combineReducers({
  connections: ConnectionsReducer,
  nodes: NodesReducer,
});

export default rootReducer;
