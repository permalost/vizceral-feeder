import { combineReducers } from 'redux';

import ConnectionsReducer from './reducer_connections';
import NodesReducer from './reducer_nodes';
import RegionsReducer from './reducer_regions';
import TrafficReducer from './reducer_traffic';

const rootReducer = combineReducers({
  connections: ConnectionsReducer,
  nodes: NodesReducer,
  traffic: TrafficReducer,
  regions: RegionsReducer,
});

export default rootReducer;
