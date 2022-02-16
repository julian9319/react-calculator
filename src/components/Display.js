import React from "react";
import ProtoTypes from "prop-types";

import "./Display.css";

export default class Display extends React.Component {
	static propTypes={
		value: ProtoTypes.string,
	};

	render() {
		return (
			<div className="component-display">
				<div>{this.props.value}</div>
			</div>
		);
	}
}