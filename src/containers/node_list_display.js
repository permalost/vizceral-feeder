import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Node from '../components/node_display';

class NodeList extends Component {
    render() {
        let nodes = this.props.nodes;
        return (
            <div>
                {_.map(nodes, node => <Node node={node} key={node.name} />)}
            </div>
        );
    }
}

function mapStateToProps({ nodes }) {
    return { nodes };
}

export default connect(mapStateToProps)(NodeList);