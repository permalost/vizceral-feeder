import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Node from '../components/node_display';
import { fetchEverything } from '../actions';

class NodeList extends Component {
    componentWillMount() {
        this.props.fetchEverything();
    }
	
    render() {
        let nodes = this.props.nodes;
        return (
            <div>
                {_.map(nodes, node => <Node node={node} key={node.name} />)}
            </div>
        );
    }
};

function mapStateToProps({ nodes }) {
    return { nodes };
}

export default connect(mapStateToProps, { fetchEverything })(NodeList);