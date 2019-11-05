import { h, Component, Fragment } from 'preact';

export default class Example extends Component {
	state = {
		cats: 'cute'
	}

	render(props, { cats }) {
		return (
			<Fragment>
				<span>cats are:</span>
				<span>{ cats }</span>
			</Fragment>
		);
	}
}
