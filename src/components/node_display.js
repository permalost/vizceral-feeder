import React, { Component } from 'react';

class NodeDisplay extends Component {
    render() {
        let node = this.props.node;
        return (
            <div>
                Name: {node.name}
            </div>
        );
    }
}

export default NodeDisplay;