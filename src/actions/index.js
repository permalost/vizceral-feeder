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

export const FETCH_EVERYTHING = 'fetch_everything';

export function fetchEverything() {
    let num = 4;
    const request = axios.get('temp'+ num + '.json');
    
    return {
        type: FETCH_EVERYTHING,
        payload: request
    };
}
