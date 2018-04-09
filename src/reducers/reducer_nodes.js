import { IDENTIFIED_NODE, FETCH_SAMPLE_DATA, FETCH_TRAFFIC } from '../actions';

export default function (state = nodes, action) {
    switch(action.type) {
        case IDENTIFIED_NODE:
            return { ...state, [action.payload.name]:action.payload }; 
        case FETCH_SAMPLE_DATA:
		case FETCH_TRAFFIC:
            return { ...state, ...(_.mapKeys(extractMetrics(action.payload.data), 'name'))};
        default:
            return state;
            // case FETCH_POSTS:
            //   return _.mapKeys(action.payload.data, 'id');
    }
}

function extractMetrics(json) {
	return [].concat.apply([], json.aggregations.client.buckets.map(client => client.hosts.buckets.map(host => {
			return {name: host.key};
		}).concat({name: client.key_as_string})));
}

const nodes = {
    'INTERNET': {
      name: 'INTERNET' // Required... this is the entry node
    },
//    'apiproxy-prod': {
//      name: 'apiproxy-prod',
//      // OPTIONAL Override the name on the label
//      displayName: 'proxy',
//      // OPTIONAL Any notices that you want to show up in the sidebar, for more details check the section on notices.
//      notices: [
//        {
//          // The title to display on the notice
//          title: 'Notice about something',
//          // OPTIONAL link to send the user when click on the notice
//          link: 'http://link/to/relevant/thing',
//          // OPTIONAL 0(default) for info level, 1 for warning level, 2 for error level (applies CSS styling)
//          severity: 1
//        }
//      ],
//      //  The class of the node. will default to 'normal' if not provided. The coloring of the UI is based on 'normal', 'warning', and 'danger', so if you want to match the UI coloring, use those class names. Any class you provide will expect to have a style 'colorClassName' available, e.g. if the class is 'fuzzy', you should also call 'vizceral.updateStyles({ colorTraffic: { fuzzy: '#aaaaaa' } })'
//      class: 'normal',
//      // OPTIONAL Any data that may be handled by a plugin or other data that isn't important to vizceral itself (if you want to show stuff on the page that contains vizceral, for example). Since it is completely optional and not handled by vizceral, you technically could use any index, but this is the convention we use.
//      metadata: {}
//    }
}