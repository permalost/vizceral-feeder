import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Connection from '../components/connection_display';
import { fetchSampleData } from '../actions';

class ConnectionList extends Component {
    componentWillMount() {
        this.props.fetchSampleData();
    }

    render() {
        let connections = this.props.connections;
        return (
            <div>
                {_.map(connections, connection => <Connection connection={connection} key={connection.source + connection.target} />)}
            </div>
        );
    }
};

function mapStateToProps({ connections }) {
    return { connections };
}

export default connect(mapStateToProps, { fetchSampleData })(ConnectionList);
