import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTraffic } from '../selectors/selector_traffic';
import { fetchSampleData } from '../actions';

class VizceralGraphData extends Component {
  componentWillMount() {
      this.props.fetchSampleData();
  }

	render() {
		return (
			<div>
				{ JSON.stringify(this.props.traffic) }
			</div>
		);
	}
};

function mapStateToProps(state) {
  return { traffic: getTraffic(state) };
}

export default connect(mapStateToProps, { fetchSampleData })(VizceralGraphData);
