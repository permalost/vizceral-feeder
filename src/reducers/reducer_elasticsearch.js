import { FETCH_EVERYTHING, identifiedConnection, identifiedNode } from '../actions';


var connections = [{
  // The source node of the connection, will log a warning if the node does not exist.
  source: 'INTERNET',
  // The target node of the connection, will log a warning if the node does not exist.
  target: 'apiproxy-prod',
  // These are the three default types/colors available in the component and the colors that are used for the nodes themselves. You are welcme to add others, or use other names instead knowing tha they may not match the UI coloring appropriately.
  metrics: {
    normal: 5000,
    danger: 5,
    warning: 0
  },
  // OPTIONAL Any notices that you want to show up in the sidebar
  notices: [],
  // OPTIONAL Any data that may be handled by a plugin or other data that isn't important to vizceral itself (if you want to show stuff on the page that contains vizceral, for example). Since it is completely optional and not handled by vizceral, you technically could use any index, but this is the convention we use.
  metadata: {}
}];

export default function(state = connections, action) {
  switch(action.type) {
    case FETCH_EVERYTHING:
      return extractMetrics(action.payload.data);
    default:
      return state;
  }
}

function extractMetrics(json) {
  return [].concat.apply([],json.aggregations.client.buckets.map(client => {
    let source = client.key_as_string;
    return client.hosts.buckets.map(host => {
      let target = host.key;
      let normal = 0;
      let danger = 0;
      let warning = 0;
      host.responses.buckets.map(response => {
        response.key < 300 ? normal+= response.doc_count : danger+= response.doc_count;
        return;
      });
      let connection = {
        "source": source,
        "target": target,
        "metrics": {
          "normal":normal,
          "danger": danger,
          "warning": warning
        }
      };
	  return connection;
  	});
  }));
}
