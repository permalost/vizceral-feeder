import { createSelector } from 'reselect';

const getRegions = (state) => state.regions;
const getNodes = (state) => state.nodes;

export const getTraffic = createSelector(
  getRegions,
  getNodes,
  (regions, nodes) => {
    return nodes;
  }
)
