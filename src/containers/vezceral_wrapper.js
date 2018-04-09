import React, { Component } from 'react';
import { connect } from 'react-redux';

import Vizceral from 'vizceral-react';

class VizceralWrapper extends Component {
	render() {
		return (
				<Vizceral view={[]} showLabels={true} traffic={this.props.traffic} />
		);
	}
};

function mapPropsToState({ traffic }) {
	return {
		traffic
	};
};

export default connect(mapPropsToState)(VizceralWrapper);