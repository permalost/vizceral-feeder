import _ from 'lodash';
import { createSelector } from 'reselect';

const getRegions = (state) => state.regions;
const getNodes = (state) => state.nodes;
const getConnections = (state) => state.connections;

const mergeTraffic = (regions, nodes, connections) => {
  regions.prod.nodes = _.map(nodes, node => node);
  regions.prod.connections = _.map(connections, connection => connection);
  return {
    "renderer": "global",
    "name": "edge",
    "nodes": _.map(regions, region => region),
    "connections":[      
    {
      "source": "INTERNET",
      "target": "prod",
      "metrics": {
        "danger": 1,
        "normal": 999,
        "warning": 0
      },
      "notices": [],
      "class": "normal"
    }
    ]
  };
}

export const getTraffic = createSelector(
  getRegions,
  getNodes,
  getConnections,
  mergeTraffic
)
