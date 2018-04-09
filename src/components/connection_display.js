import React, { Component } from 'react';

class ConnectionDisplay extends Component {
    render() {
        let connection = this.props.connection;
        return (
            <div>
                <div>
                    Source: {connection.source}
                </div>
                <div>
                    Target: {connection.target}
                </div>
                <div>
                    Metrics:
                    <ul>
                        <li>normal: {connection.metrics.normal}</li>
                        <li>warning: {connection.metrics.warning}</li>
                        <li>danger: {connection.metrics.danger}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ConnectionDisplay;
