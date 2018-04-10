import React, { Component } from 'react';
import { connect } from 'react-redux';

import Vizceral from 'vizceral-react';
import { getTraffic } from '../selectors/selector_traffic';
import { fetchSampleData } from '../actions';

class VizceralWrapper extends Component {
	componentWillMount() {
		this.props.fetchSampleData();
	}

	render() {
		return (
				<Vizceral view={[]} showLabels={true} traffic={this.props.traffic} />
		);
	}
};

function mapStateToProps({ traffic }) {
	return { traffic };
};

// function mapStateToProps(state) {
//   return { traffic: getTraffic(state) };
// }

export default connect(mapStateToProps, { fetchSampleData })(VizceralWrapper);