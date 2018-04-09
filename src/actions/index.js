import axios from 'axios';

export const IDENTIFIED_NODE = 'identified_node';

export function identifiedNode(node) {
    return {
        type: IDENTIFIED_NODE,
        payload: node
    };
}

export const IDENTIFIED_CONNECTION = 'identified_connection';

export function identifiedConnection(connection) {
    return {
        type: IDENTIFIED_CONNECTION,
        payload: connection
    };
}

export const FETCH_SAMPLE_DATA = 'fetch_everything';

export function fetchSampleData() {
    let num = 4;
    const request = axios.get('temp'+ num + '.json');
    
    return {
        type: FETCH_SAMPLE_DATA,
        payload: request
    };
}

export const FETCH_TRAFFIC = 'fetch_traffic';

const ES_API_URL = '/api';
const ES_SEARCH_URL = '/prod-apache-*/_search?pretty';
const ES_SEARCH_BODY = '{"size":0,"query":{"constant_score":{"filter":{"range":{"@timestamp":{"gte":"now-5m"}}}}},"aggs":{"client":{"terms":{"field":"clientip"},"aggs":{"hosts":{"terms":{"field":"host"},"aggs":{"responses":{"terms":{"field":"response"}}}}}}}}';

export function fetchEsSearch() {
  const request = axios.post(`${ES_API_URL}${ES_SEARCH_URL}`, ES_SEARCH_BODY);

  return {
    type: FETCH_TRAFFIC,
    payload: request
  };
}

