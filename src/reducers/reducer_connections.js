import { IDENTIFIED_CONNECTION, FETCH_EVERYTHING } from '../actions';

export default function (state = sampleConnections, action) {
    switch(action.type) {
        case IDENTIFIED_CONNECTION:
            return { ...state, [action.payload.source + ':' + action.payload.target]:action.payload };
        case FETCH_EVERYTHING:
            console.log(action.payload);
        default:
            return state;
            // case FETCH_POSTS:
            //   return _.mapKeys(action.payload.data, 'id');
    }
}


const sampleConnections = {
    'INTERNET:apiproxy-prod': {
        // The source node of the connection, will log a warning if the node does not exist.
        source: 'INTERNET',
        // The target node of the connection, will log a warning if the node does not exist.
        target: 'apiproxy-prod',
        // These are the three default types/colors available in the component and the colors that are used for the nodes themselves. You are welcme to add others, or use other names instead knowing tha they may not match the UI coloring appropriately.
        metrics: {
            normal: 5000,
            danger: 5,
            warning: 0
        }
    },
    'apiproxy-prod:test': {
        // The source node of the connection, will log a warning if the node does not exist.
        source: 'apiproxy-prod',
        // The target node of the connection, will log a warning if the node does not exist.
        target: 'test',
        // These are the three default types/colors available in the component and the colors that are used for the nodes themselves. You are welcme to add others, or use other names instead knowing tha they may not match the UI coloring appropriately.
        metrics: {
            normal: 2500,
            danger: 15,
            warning: 0
        },
        // OPTIONAL Any notices that you want to show up in the sidebar
        notices: [],
        // OPTIONAL Any data that may be handled by a plugin or other data that isn't important to vizceral itself (if you want to show stuff on the page that contains vizceral, for example). Since it is completely optional and not handled by vizceral, you technically could use any index, but this is the convention we use.
        metadata: {}
    }
}