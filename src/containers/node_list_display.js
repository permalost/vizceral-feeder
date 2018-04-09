import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Node from '../components/node_display';
import { fetchSampleData } from '../actions';

class NodeList extends Component {
    componentWillMount() {
        this.props.fetchSampleData();
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

export default connect(mapStateToProps, { fetchSampleData })(NodeList);